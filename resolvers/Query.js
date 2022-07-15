
exports.Query = {
        hello: () => {
            return "hello";
        },
        getAllPosts: async (parent, args, {db}) => {
            return await db.information.find();
        },
    getPost: async (_parent, { id }, { db }) => {
       
            // return await db.information.findById(id) 
            // WITHOUT_OBJECT_ID
            return await db.information.find({ id:{"$eq":id}})
        },
    getCategory: async (parent, args, {db}) => {
        return await db.category.find()
    },
    categoryByid: async (parent, {categoryid}, { db }) => {
        
        return await db.category.findById(categoryid);
    },
    }


