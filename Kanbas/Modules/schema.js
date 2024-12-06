import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    name: String,
    description: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    lessons: {
      type: [
        {
          id: String,
          name: String,
          description: String,
          module: String
        }
      ] , default: []}
  },
  { collection: "modules" }
);
export default schema;