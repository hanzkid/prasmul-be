require('dotenv').config()
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect(process.env.MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true }).then(result => {
    console.log('Connected to database')
}).catch(err => {
    console.error(err.message, err)
})

const courses = require('./services/courses')
const server = new ApolloServer({ 
    typeDefs: [courses.typeDefs], 
    resolvers: [courses.resolvers]
});

app.get('/', function (req, res) {
    res.json({
        message: 'Backend Test'
    })
})

server.start().then(() => {
    server.applyMiddleware({ app });
    app.listen({ port: 3000, hostname: '0.0.0.0' }, () =>
        console.log('Now browse to http://localhost:3000' + server.graphqlPath)
    );
})

