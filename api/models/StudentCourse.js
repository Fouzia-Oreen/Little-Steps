import mongoose from "mongoose";

// create student-course-schema
const StudentCoursesSchema = new mongoose.Schema({
  userId: String,
  courses: [
    {
      courseId: String,
      title: String,
      instructorId: String,
      instructorName: String,
      dateOfPurchase: Date,
      courseImage: String,
    },
  ],
});

const studentCourses = mongoose.model("StudentCourses", StudentCoursesSchema);
export default studentCourses