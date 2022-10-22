const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Item {
    _id: ID
    itemName: String
    postedAt: String
    itemDesc: String
    itemPrice: String
    itemImage: String
  }

  type User {
    _id: ID
    username: String
    email: String
    itemCount: Int
    items: [Item]
  }

  type Products {
    updatedUser: User
    createdItem: Item
  }

  type Query {
    me: User
    user(email: String!): User
    items: [Item]
    item(_id: ID!): Item
    checkout(items: [ID]!): Checkout
  }

  type Auth {
    token: ID!
    user: User
  }

  type Checkout {
    session: ID
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addItem(
      itemName: String!
      itemDesc: String!
      itemPrice: String!
      itemImage: String
    ): Item
  }
`;

module.exports = typeDefs;
