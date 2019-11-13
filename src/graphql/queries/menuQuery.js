var GraphQLObjectType = require("graphql").GraphQLObjectType;
var GraphQLList = require("graphql").GraphQLList;
var menuModel = require("../../models/menu");
var menuType = require("../types/menuType").menuType;

// Query
exports.menuQuery = new GraphQLObjectType({
  name: "Query",
  fields: () => {
    return {
      menuItems: {
        type: new GraphQLList(menuType),
        resolve: async () => {
          const menu = await menuModel.find();
          console.log(menu);
          if (!menu) {
            throw new Error("error while fetching data");
          }
          return menu;
        }
      }
    };
  }
});
