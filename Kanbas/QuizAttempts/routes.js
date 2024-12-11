import * as dao from "./dao.js"
export default function quizAttempts(app) {
    app.get("/api/quizAttempts/:uid/:qid", async (req, res) => {
        const { uid, qid } = req.params
        const result = await dao.findQuizAttempts(uid, qid)
        res.json(result);
    })

    app.post("/api/quizAttempts", async (req, res) => {
        const quizAttempt = req.body;
        const result = await dao.createQuizAttempt(quizAttempt)
        res.json(result);
    })

    app.delete("/api/quizAttempts/:qaid", async (req, res) => {
        const { qaid } = req.params;
        const result = await dao.deleteQuizAttempt(qaid);
        res.json(result)
    })
}