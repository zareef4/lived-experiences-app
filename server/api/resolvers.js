const resolvers = {
	Query: {
		posts: async (_parent, _args, _context, _info) => {
			let posts = await _context.db
				.collection("posts")
				.find()
				.toArray()
				.then(res => {
					return res;
				});
			return posts;
		}
	}
};

module.exports = resolvers;
