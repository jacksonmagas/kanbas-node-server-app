import model from "./model.js";
import enrollmentModel from "../Enrollments/model.js"

export function findAllCourses() {
  return model.find()
}

export function createCourse(course) {
  delete course._id;
  return model.create(course);
}

export function deleteCourse(courseId) {
  enrollmentModel.deleteMany({course: courseId});
  return model.deleteOne({_id: courseId});
}

export function updateCourse(courseId, courseUpdates) {
  return model.updateOne({ _id: courseId }, { $set: courseUpdates });
}
