const mongoose = require("mongoose");
const { Schema } = mongoose;

const classSchema = new Schema({
  uid: { type: Number, unique: true },
  department: Number,
  number: Number,
  section: Number,
  title: String,
  teacherUid: Number,
  description: String,
  prereqs: String,
  credits: Number,
  capacity: Number,
  status: { type: Number, default: 0 },
  enrolled: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  waitlisted: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  saved: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  start: Date,
  end: Date,
  days: String,
  location: String,
});

const userSchema = new Schema({
  uid: { type: Number, unique: true },
  username: { type: String, unique: true },
  password: String,
  isTeacher: { type: Boolean, default: false },
  classes: [{ type: Schema.Types.ObjectId, ref: 'Class' }],
  enrolled: [{ type: Schema.Types.ObjectId, ref: 'Class' }],
  waitlisted: [{ type: Schema.Types.ObjectId, ref: 'Class' }],
  saved: [{ type: Schema.Types.ObjectId, ref: 'Class' }],
});

const Class = mongoose.model('Class', classSchema);
const User = mongoose.model('User', userSchema);

const connection_URL = 'mongodb+srv://dmowen:dmowen@cluster0.duqpq2q.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(connection_URL).then(()=>{console.log(`DBServer Running`)})

module.exports = {Class,User}

