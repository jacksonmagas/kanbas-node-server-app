import express, { json } from 'express';
import Hello from './Hello.js';
import Lab5 from './Lab5/index.js';
import cors from "cors";
import UserRoutes from "./Kanbas/Users/routes.js"
import CourseRoutes from "./Kanbas/Courses/routes.js"
import ModuleRoutes from './Kanbas/Modules/routes.js';
import "dotenv/config";
import session from 'express-session';
import AssignmentsRoutes from './Kanbas/Assignments/routes.js';
import mongoose from 'mongoose';
import QuizRoutes from './Kanbas/Quizzes/routes.js';

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://localhost:27017/kanbas"
console.log(CONNECTION_STRING)
await mongoose.connect(CONNECTION_STRING)
.then(() => {
  console.log("Connected to DB")
  console.log("DB name: ", mongoose.connection.db.databaseName)
})
.catch((error) => console.error("Error connecting to MongoDB Atlas:", error.message))

const app = express()
app.use(cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
  }
));
app.use(express.json());
const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kanbas",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
}
console.log(`Setting up session: ${JSON.stringify(sessionOptions)}`);
app.use(session(sessionOptions));

UserRoutes(app)
CourseRoutes(app)
Hello(app)
Lab5(app)
ModuleRoutes(app)
QuizRoutes(app)
AssignmentsRoutes(app)
app.listen(process.env.PORT || 4000)
