const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();
const schema = buildSchema(`
type Query {
  hello: String
}
`);
const root = {
  hello: () => {
    return "Hello world!";
  },
};
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(5000, () => console.log("Server is running!"));
