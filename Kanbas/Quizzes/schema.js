import mongoose, { Schema } from 'mongoose';

const QuizSchema = new Schema({
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    title: String,
    description: String,
    type: {type: Number, enum: [0, 1]},
    group: {type: Number, enum: [0, 1, 2, 3, 4]},
    shuffleAnswers: Boolean,
    timeLimit: Number,
    timeLimitEnabled: Boolean,
    attempts: Number,
    assignTo: String,
    due: String,
    availableFrom: String,
    availableUntil: String,
    questions: [{
        title: String,
        pts: Number,
        type: {type: Number, enum: [0, 1, 2]},
        question: String,
        answer: {
          correctAnswer: Boolean,
          answers: [{
            text: String,
            correct: Boolean,
            caseSensitive: Boolean
          }]
        }
    }],
    published: Boolean,
    points: Number
});
export default QuizSchema;