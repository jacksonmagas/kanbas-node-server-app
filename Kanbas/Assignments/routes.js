import * as dao from "./dao.js"

export default function AssignmentsRoutes(app) {
  app.delete("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    console.log(assignmentId);
    const status = dao.deleteAssignment(assignmentId);
    res.send(status);
  });

  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = dao.updateAssignment(assignmentId, assignmentUpdates);
    res.send(status);
  });
}