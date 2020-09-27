const { gql } = require("apollo-server");

module.exports = gql`
	type Post {
		title: String
		author: String
		story: String
		image: String
		positiveExperience: Boolean
		location: String
		lat: String
		long: String
		anon: Boolean
		_id: String
	}

	input PostInput {
		title: String
		author: String
		story: String
		image: String
		positiveExperience: Boolean
		location: String
		lat: String
		long: String
		anon: Boolean
	}

	type Query {
		posts: [Post]
	}

	type Mutation {
		createPost(post: PostInput): Post
	}
`;
