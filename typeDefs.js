const { gql } = require('apollo-server-express')

const typeDefs = gql`
type Query{
    hello:String
    getAllPosts:[Post!]!
    getPost(id:ID):[Post] 
    getCategory(filter:namefilter):[Category!]!
    categoryByid(categoryid:String!):Category

}
type Post{
    id:String
    title:String
    body:String
    userId:String
}
type Category{
    categoryid:String!
    name:String!
    getAllPosts:[Post!]!
}

input PostInput{
    title:String
    body:String
    userId:String
}
input namefilter{
    name:String
}

type Mutation{
    createPost(input:PostInput):Post
    deletePost(id:ID):String
    updatePost(id:ID,post:PostInput):Post
}
`;
module.exports = typeDefs; 