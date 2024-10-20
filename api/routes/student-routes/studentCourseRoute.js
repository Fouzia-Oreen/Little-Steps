import express from "express";
import {
  getCoursesByStudentId,
} from "../../controllers/student-controllers/studentCourseController";

const router = express.Router();

router.get("/get/:studentId", getCoursesByStudentId);

module.exports = router;