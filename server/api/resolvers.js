const resolvers = {
	Query: {
		posts: async (_parent, _args, _context, _info) => {
			let posts = await _context.db
				.collection("posts")
				.find()
				.sort({ _id: -1 })
				.toArray()
				.then(res => {
					return res;
				});
			return posts;
		}
	},
	Mutation: {
		createPost: async (_parent, { post }, _context, _info) => {
			let newPost = await _context.db
				.collection("posts")
				.insertOne(post)
				.then(res => {
					return res;
				});

			return newPost.ops[0];
		}
	}
};

module.exports = resolvers;
