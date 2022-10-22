const { AuthenticationError } = require("apollo-server-express");
const { User, Item } = require("../models");
const { signToken } = require("../utils/auth");
// import stripe
const stripe = require("stripe")(
  "sk_test_51LmkUwI8Ja0J7Wc9bwQVKPGX6SRU8yawhturGzTPpF6BWbW8yf6imnLQeIZFj1pD91VM0vdk0UAK2MWIzisPYUpD00OtFswifF"
);
// process.env.STRIPE_KEY

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("items");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    // query a user
    user: async (parent, { email }, context) => {
      if (context.user) {
        const user = await User.findOne({ email })
          .select("-__v -password")
          .populate("items");

        return user;
      }

      throw new AuthenticationError("Can't find this user");
    },
    // query all product
    items: async (parent, args, context) => {
      const items = await Item.find();

      return items;
    },
    // query one product
    item: async (parent, { _id }) => {
      const item = await Item.findById(_id);
      console.log(_id);

      return item;
    },
    checkout: async (parent, args, context) => {
      const url = "https://localhost:3001";

      const items = args.items;
      console.log(items);
      const lineItems = [];
      items.forEach((item) => {
        lineItems.push({
          price: item.id,
          quantity: item.quantity,
        });
      });

      console.log(lineItems);

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/cancel`,
      });

      return { session: session.id };
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { password, email }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Can't find this user");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addItem: async (parent, args, context) => {
      if (context.user) {
        const itemData = await Item.create(args);
        const userData = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { items: itemData } },
          { new: true, runValidators: true }
        );

        return itemData;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
