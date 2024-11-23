import Database from "../Database/index.js";
export function findModulesForCourse(courseId) {
  const { modules } = Database;
  return modules.filter((module) => module.course === courseId);
}

export function deleteModule(moduleId) {
 const { modules } = Database;
 Database.modules = modules.filter((module) => module._id !== moduleId);
}
