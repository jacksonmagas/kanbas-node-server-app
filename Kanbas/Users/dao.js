import model from "./model.js";
import db from "../Database/index.js"

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

export const createUser = (user) => {
    delete user._id;
    // ensure user has the proper type
    const newUser = { firstName: "", lastName: "", email: "", dob: Date.now(), role: "",
    loginId: "", section: "", lastActivity: Date.now().toString(), totalActivity: "0", ...user}
 return model.create(newUser);
};
export const findAllUsers = () => model.find();
export const findUsersFiltered = ({role, name}) => {
    let regex;
    try {
        regex = new RegExp(name, "i");
    } catch (e) {
        regex = new RegExp("^$");
    }
    const nameQuery = {$or: [{ firstName: { $regex: regex }}, {lastName: { $regex: regex }}]};
    const roleQuery = {role: role};
    if (role && name) {
        return model.find({$and: [nameQuery, roleQuery]});
    } else if (role) {
        return model.find(roleQuery);
    } else if (name) {
        return model.find(nameQuery);
    } else {
        return findAllUsers();
    }
};
export const findUserById = (userId) => model.findById(userId);
export const findUserByUsername = (username) => model.findOne({username: username});
export const findUserByCredentials = async (username, password) => {
  console.log("Checking connection state:", mongoose.connection.readyState); // 1 = connected
  try {
    const user = await model.findOne({ username: username, password: password });
    if (user) {
      console.log("User found:", user);
    } else {
      console.log("No user found with the provided username and password.");
    }
    return user;
  } catch (error) {
    console.error("Error executing findOne query:", error.message);
    return null;
  }
}
export const updateUser = (userId, user) => model.updateOne({ _id: userId }, {$set: user});
export const deleteUser = (userId) => model.deleteOne({ _id: userId });