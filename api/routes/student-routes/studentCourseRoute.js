import express from "express";
import {
  getCoursesByStudentId,
} from "../../controllers/student-controllers/studentCourseController.js";

const router = express.Router();
router.get("/get/:studentId", getCoursesByStudentId);

export default router;