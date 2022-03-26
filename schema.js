const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Person = new Schema({
    name: {
        first: String,
        last: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        index: {
            unique: true,
            sparse: true
        }
    },
    NID: {
        type: String,
        required: true,
        index: {
            unique: true,
            sparse: true
        }
    },
    sex: String,
    phoneNmuber: String,
    code: {
        type: String,
        required: true,
        index: {
            unique: true,
            sparse: true
        }
    },
    pass: String,
    address: Address

});

const Address = new Schema({
    city: String,
    street: String,
    country: String,
    zipCode: Number
})

const Doctor = new Schema({
    person: Person,
    street: String,
    country: String,
    zipCode: Number,
    dep: Department,
    courses: [Course]
})


const Department = new Schema({
    code: {
        type: String,
        required: true,
        index: {
            unique: true,
            sparse: true
        }
    },
    name: String
})

const Course = new Schema({
    name: String,
    hours: Number,
    dependOn: [Course],
    code: {
        type: String,
        required: true,
        index: {
            unique: true,
            sparse: true
        }
    },

})

const Advisor = new Schema({
    person: Person,
    code: {
        type: String,
        index: {
            unique: true,
            sparse: true
        }
    }
})

const Student = new Schema({
    person: Person,
    code: {
        type: String,
        index: {
            unique: true,
            sparse: true
        }
    },
    courses: [Course]
})

const Request = new Schema({
    action: String,
    student : Student,
    course : Course
})

