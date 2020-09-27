const { gql } = require("apollo-server");

module.exports = gql`
	type Book {
		title: String
		author: String
	}

	type Post {
		title: String
		author: String
		story: String
		image: String
		isGoodExperience: Boolean
		location: String
		_id: String
	}

	type Query {
		books: [Book]
		posts: [Post]
	}
`;
