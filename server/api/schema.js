const { gql } = require("apollo-server");

module.exports = gql`
	type Post {
		title: String
		author: String
		story: String
		image: String
		isGoodExperience: Boolean
		location: String
		_id: String
	}

	input PostInput {
		title: String
		author: String
		story: String
		image: String
		isGoodExperience: Boolean
		location: String
	}

	type Query {
		posts: [Post]
	}

	type Mutation {
		createPost(post: PostInput): Post
	}
`;
