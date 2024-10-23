import express from "express";
import {
  addNewCourse,
  getAllCourses,
  getCourseDetailsByID,
  updateCourseByID,
} from "../../controllers/instructorController.js";

// create routes for adding a course, read/get all course using details and update the course
const router = express.Router();
router.post("/add", addNewCourse);
router.get("/get", getAllCourses);
router.get("/get/details/:id", getCourseDetailsByID);
router.put("/update/:id", updateCourseByID);

export default router;