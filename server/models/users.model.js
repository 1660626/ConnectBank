const db = require("../utils/db");

module.exports = {
  all() {
    return db("users");
  },

  async single(user_id) {
    const users = await db("users").where("userID", user_id);
    if (users.length === 0) {
      return null;
    }
    return users[0];
  },

  async singleByEmail(email) {
    const users = await db("users").where("email", email);
    if (users.length === 0) {
      return null;
    }
    return users[0];
  },

  async add(user) {
    const ids = await db("users").insert(user);
    return ids[0];
  },

  delete(id) {
    return db("users").where("User_ID", id).del();
  },
};
