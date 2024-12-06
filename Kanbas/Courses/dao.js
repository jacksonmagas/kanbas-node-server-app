import Database from "../Database/index.js";
import model from "./model.js";


export function findAllCourses() {
  return model.find()
}

export function findCoursesForEnrolledUser(userId) {
  const { courses, enrollments } = Database;
  const enrolledCourses = courses.filter((course) =>
    enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id));
  return enrolledCourses;
}

export function createCourse(course) {
  delete course._id;
  return model.create(course);
}

export function deleteCourse(courseId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(
    (enrollment) => enrollment.course !== courseId);
  return model.deleteOne({_id: courseId});
}

export function updateCourse(courseId, courseUpdates) {
  return model.updateOne({ _id: courseId }, { $set: courseUpdates });
}

export function createModule(module) {
  const newModule = { ...module, _id: Date.now().toString() };
  Database.modules = [...Database.modules, newModule];
  return newModule;
}
