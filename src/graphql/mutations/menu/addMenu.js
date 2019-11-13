var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLString = require("graphql").GraphQLString;
var menuType = require("../../types/menuType");
var menuModel = require("../../../models/menu");
exports.add = {
  type: menuType.menuType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    author: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: async (root, args) => {
    const uModel = new menuModel(args);
    const newMenu = await uModel.save();
    if (!newMenu) {
      throw new Error("error");
    }
    return newMenu;
  }
};
