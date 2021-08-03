const { gql } = require("apollo-server-express");
const Course = require('../models/courses')

const typeDefs = gql`
    type Course {
        id: String,
        courses: String,
        image_url: String,
        price: Int
    }

    input courseInput {
        courses: String!,
        image_url: String!,
        price: String!
    }

    type Query {
        courses: [ Course ],
        course(id : String) : Course
    }

    type Mutation {
        createCourse(course: courseInput!): Course,
        updateCourse(id: String!, course: courseInput!): Course,
        deleteCourse(id: String!): String,
    }
`

const getCourses = async() => {
    const courses = await Course.find({});
    return courses
}

const getCourse = async({ id }) => {
    const course = await Course.findById(id);
    return course
}

const createCourse = async({ course }) => {
    const { courses, image_url, price } = course
    return await Course.create({ courses, image_url, price })
}

const updateCourse = async({ id, course }) => {
    const courseData = await Course.findById(id)
    courseData.overwrite(course)
    await courseData.save()
    return courseData
}

const deleteCourse = async({ id }) => {
    const courseData = await Course.findById(id)
    await courseData.delete()
    return 'success delete courses'
}

const resolvers = {
    Query: {
        courses: () => getCourses(),
        course: (parent, args, context, info) => getCourse(args)
    },
    Mutation: {
        createCourse: (parent, args, context, info) => createCourse(args),
        updateCourse: (parent, args, context, info) => updateCourse(args),
        deleteCourse: (parent, args, context, info) => deleteCourse(args),
    }
}

module.exports = {
    typeDefs,
    resolvers
}