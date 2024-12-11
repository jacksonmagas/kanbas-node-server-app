import model from "./model.js";

export function findQuizzesForCourse(courseId) {
  return model.find({course: courseId})
}

export function findQuizzesFiltered(courseId, title, published) {
    let regex;
    try {
        regex = new RegExp(title, "i");
    } catch (e) {
        regex = new RegExp("^$");
    }
    const titleQuery = {course : courseId, title : { $regex: regex }};
    const query = published ? {$and: [titleQuery, {published: true}]} : titleQuery;
  return model.find(query);
}

export function findPublishedQuizzesForCourse(quizId) {
    return model.find({course: quizId, published: true})
}

export function createQuiz(quiz) {
  delete quiz._id;
  quiz.questions.forEach(q => delete q._id)
  return model.create(quiz);
}

export function deleteQuiz(quizId) {
  return model.findByIdAndDelete(quizId);
}

export function updateQuiz(quizId, quizUpdates) {
  quizUpdates.questions.forEach(q => delete q._id)
  return model.updateOne({ _id: quizId }, { $set: quizUpdates });
}