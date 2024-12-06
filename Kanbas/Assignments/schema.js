import mongoose from "mongoose";

/*
export type Assignment = {
  _id : string,
  course : string,
  name : string,
  description : string,
  sttime : string,
  duetime : string,
  endtime : string,
  pts : number,
}
*/

const assignmentSchema = new mongoose.Schema(
 {
    course : { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    name : String,
    description : String,
    sttime : String,
    duetime : Date,
    endtime : Date,
    pts : Number,
 },
 { collection: "assignments" }
);
export default assignmentSchema;