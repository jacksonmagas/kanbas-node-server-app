import Database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}

export function unenrollUserFromCourse(userId, courseId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter((e) => e.user != userId || e.course != courseId);
}

export function getEnrollments(userId) {
  const { enrollments } = Database;
  return enrollments.filter((enr) => enr.user === userId);
}