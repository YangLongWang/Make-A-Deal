const express = require("express");
var bodyParser = require("body-parser");
const path = require("path");
// import Auth
const { authMiddleware } = require("./utils/auth");

// import ApolloServer
const { ApolloServer } = require("apollo-server-express");

// import typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// Serve up static assets
app.use("/images", express.static(path.join(__dirname, "../client/images")));

// app.use(bodyParser.json({ limit: "1mb" }));
app.use(express.json({ limit: 20971520 }));
// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// app.post("/checkout", (req, res) => {
//   res.send(
//     JSON.stringify({
//       url: session.url,
//     })
//   );
// });

// create a new Apollo server and pass in schema data
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`🌍 Now listening on localhost:${PORT}`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer(typeDefs, resolvers);
