import model from "./model.js";

export function findQuizAttempts(userId, quizId) {
  return model.find({user: userId, quiz: quizId})
}

export function createQuizAttempt(quizAttempt) {
  delete quizAttempt._id;
  quizAttempt.answers.forEach(q => delete q._id)
  return model.create(quiz);
}

export function deleteQuizAttempt(quizAttemptId) {
  return model.findByIdAndDelete(quizAttemptId);
}