import mongoose from "mongoose";
const enrollmentSchema = new mongoose.Schema(
 {
   quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
   user:   { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
   answers: [
    {
      question: { type: mongoose.Schema.Types.ObjectId, ref: "quiz.questions"},
      answer: String
    }
   ]
 },
 { collection: "QuizAttempts" }
);
export default quizAttemptSchema;