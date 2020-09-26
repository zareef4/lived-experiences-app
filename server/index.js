const { ApolloServer, gql } = require("apollo-server");
const { makeExecutableSchema } = require("graphql-tools");
const MongoClient = require("mongodb").MongoClient;

const typeDefs = require("./api/schema");
const resolvers = require("./api/resolvers");

const mongoPw = "RJy9Yui9bAVEtYqc";
const mongoUser = "application";
const mongoDbName = "lived_experiences";

const uri = `mongodb+srv://${mongoUser}:${mongoPw}@cluster0.ptatj.mongodb.net/${mongoDbName}?retryWrites=true&w=majority`;

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});

let db;

const server = new ApolloServer({
	schema,
	context: async () => {
		if (!db) {
			try {
				const dbClient = new MongoClient(uri, {
					useNewUrlParser: true,
					useUnifiedTopology: true
				});

				if (!dbClient.isConnected()) await dbClient.connect();
				db = dbClient.db(mongoDbName);
			} catch (e) {
				console.log(
					"--->error while connecting with graphql context (db)",
					e
				);
			}
		}

		return { db };
	}
});

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
