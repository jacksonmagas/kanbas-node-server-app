import * as dao from "./dao.js"
export default function EnrollmentRoutes(app) {
 app.delete("/api/enrollments/:userId/:courseId", async (req, res) => {
   const { courseId, userId } = req.params;
   const status = await dao.unenrollUserFromCourse(userId, courseId);
   res.send(status);
 });

 app.post("/api/enrollments", async (req, res) => {
   const { userId, courseId } = req.body;
   const status = await dao.enrollUserInCourse(userId, courseId);
   res.send(status);
 });

 app.get("/api/enrollments/:userId", async (req, res) => {
  const { userId } = req.params;
  const enrollments = dao.getEnrollments(userId);
  res.send(enrollments);
 });
}