import Database from "../Database/index.js";

export function createAssignment(assignment) {
  const newassignment = { ...assignment, _id: Date.now().toString() };
  Database.assignments = [...Database.assignments, newassignment];
  return newassignment;
}

export function deleteAssignment(assignmentId) {
  const { assignments } = Database;
  Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  const { assignments } = Database;
  const assignment = assignments.find((assignment) => assignment._id === assignmentId);
  Object.assign(assignment, assignmentUpdates);
  return assignment;
}

export function findAssignmentForCourse(courseId) {
  const { assignments } = Database;
  return assignments.filter((assignment) => assignment.course === courseId);
}