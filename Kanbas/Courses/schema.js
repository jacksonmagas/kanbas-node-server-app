import mongoose from "mongoose";
/*
export interface Course {
  _id: string,
  name: string,
  number: string,
  startDate: string,
  endDate: string,
  department: string,
  credits: number,
  image?: string,
  description: string,
  author?: string
}
*/
const courseSchema = new mongoose.Schema(
 {
   name: String,
   number: String,
   startDate: Date,
   endDate: Date,
   department: String,
   credits: Number,
   image: String,
   description: String,
   author: String
 },
 { collection: "courses" }
);
export default courseSchema;