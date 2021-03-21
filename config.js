// @ts-check

const config = {
  endpoint: "https://korpongcosmosdb.documents.azure.com:443/",
  key: "Dj73EB33zWe5BMAwiOZpQ8vN0O5YpLf0J1I87W2nVssQ5SzZYEFq21FzLZQUDj6z3y8xBhCrI4Fvb3hP4GMUxA==",
  databaseId: "KorpongCosmoDatabase",
  containerId: "KorpongContainerId",
  partitionKey: { kind: "Hash", paths: ["/category"] }
};

module.exports = config;