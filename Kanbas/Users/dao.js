import db from "../Database/index.js";

/*
_id: string;
username: string;
password: string;
firstName: string;
lastName: string;
email: string;
dob: string;
role: string;
loginId: string;
section: string;
lastActivity: string;
totalActivity: string;
*/

let { users } = db;
export const createUser = (user) => {
 const newUser = {_id: Date.now().toString(), firstName: "", lastName: "", email: "", dob: "", role: "STUDENT",
  loginId: "", section: "", lastActivity: Date.now().toString(), totalActivity: "0", ...user}
 users = [...users, newUser];
 return newUser;
};
export const findAllUsers = () => users;
export const findUserById = (userId) => users.find((user) => user._id === userId);
export const findUserByUsername = (username) => users.find((user) => user.username === username);
export const findUserByCredentials = (username, password) =>
  users.find( (user) => user.username === username && user.password === password );
export const updateUser = (userId, user) => (users = users.map((u) => (u._id === userId ? user : u)));
export const deleteUser = (userId) => (users = users.filter((u) => u._id !== userId));