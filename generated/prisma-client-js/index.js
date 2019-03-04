"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "verification",
    embedded: false
  },
  {
    name: "ride",
    embedded: false
  },
  {
    name: "place",
    embedded: false
  },
  {
    name: "message",
    embedded: false
  },
  {
    name: "user",
    embedded: false
  },
  {
    name: "chat",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`,
  secret: `wtfprisma`
});
exports.prisma = new exports.Prisma();
