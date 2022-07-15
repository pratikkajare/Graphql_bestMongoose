exports.Mutation = {
        createPost: async (parent, {input}, {db}) => {
            const { title, body ,userId} = input;
            console.log(title, body);
            const post = new db.information({ title, body ,userId});
            await post.save();
            return post;
   
        },
        deletePost: async (parent, args, context, info) => {
            const { id } = args
            await Post.findByIdAndDelete(id)
            return "ok, post deleted by";
        },
        updatePost: async (parent, args, context, info) => {
            const { id } = args
            const { title, description } = args.post;
            const updates = {
            
            }
            if (title !== undefined) {
                updates.title = title
            }
            if (description !== undefined) {
                updates.description = description
            }
            const post = await Post.findByIdAndUpdate(id, updates,
                { new: true });
            return post
        }
    }
