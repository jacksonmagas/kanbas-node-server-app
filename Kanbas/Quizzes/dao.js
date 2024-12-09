import model from "./model.js";

export function findQuizzesForCourse(quizId) {
  return model.find({course: quizId})
}

export function findPublishedQuizzesForCourse(quizId) {
    return model.find({course: quizId, published: true})
}

export function createQuiz(quiz) {
  delete quiz._id;
  console.log(`${JSON.stringify(quiz)}`)
  return model.create(quiz);
}

export function deleteQuiz(quizId) {
  return model.findByIdAndDelete(quizId);
}

export function updateQuiz(quizId, quizUpdates) {
  return model.updateOne({ _id: quizId }, { $set: quizUpdates });
}