const express = require('express');
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./typeDefs')
const { Query } = require('./resolvers/Query')
const { Mutation } = require('./resolvers/Mutation')
const { Category } = require("./resolvers/Category");
const mongoose = require('mongoose');
const { db} = require("./models/Post.model");
const MONDB = "mongodb+srv://pratikkajare:2813pratik@cluster1.j5xcliw.mongodb.net/pratik?retryWrites=true&w=majority";
async function startserver() {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers: {
            Query,
            Mutation,
            Category
        },
        context:{
            db
        }
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app: app});

    app.use((req, res) => {
        res.send('Hello from express apollo')
    });
    
    await mongoose.connect(MONDB, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        
    });
    console.log('Moongoose connected')

    app.listen(3000, () => {
        console.log("hosted on 4000");
    })
}
startserver();