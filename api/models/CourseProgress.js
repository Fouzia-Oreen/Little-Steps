import mongoose from "mongoose";

// create lecture-progress-schema
const LectureProgressSchema = new mongoose.Schema({
  lectureId: String,
  viewed: Boolean,
  dateViewed: Date,
});

// creating course-progress-schema
const CourseProgressSchema = new mongoose.Schema({
  userId: String,
  courseId: String,
  completed: Boolean,
  completionDate: Date,
  lecturesProgress: [LectureProgressSchema],
});

const post = mongoose.model("Progress", CourseProgressSchema);

export default post