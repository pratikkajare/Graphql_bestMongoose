exports.Category = {
  getAllPosts: async({categoryid}, args, { db }) => {
    // const categoryid = parent.categoryid;
    console.log(categoryid);
    //  return await db.information.find()
     return await db.information.find({ userId:{"$eq":categoryid}}); //equal to
    

    // return db.information.find({ userId:{"$eq":categoryid}});
  }
}