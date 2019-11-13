var GraphQLSchema = require("graphql").GraphQLSchema;
var GraphQLObjectType = require("graphql").GraphQLObjectType;
var menuQuery = require("../queries/menuQuery").menuQuery;
var mutation = require("../mutations/menuMutation");

exports.menuSchema = new GraphQLSchema({
  query: menuQuery,
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: mutation
  })
});
