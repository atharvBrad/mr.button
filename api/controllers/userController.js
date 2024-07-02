const User = require("../models/user");

module.exports = {
  deleteUser: async (req, res) => {
    console.log(`Delete request received for ID: ${req.params.id}`);
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("user deleted successfully");
    } catch (error) {
      res.status(500).json({ error: "failed to delete" });
    }
  },

  deleteAllUsers: async (req, res) => {
    console.log("Delete all users request received");
    try {
      await User.deleteMany({}); // Deletes all documents matching the condition (in this case, all users)
      res.status(200).json("All users deleted successfully");
    } catch (error) {
      console.error("Error deleting users:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // after login route is created
  // getUser : async (req, res) => {
  //     try{
  //         const user = await User.findById(req.params.id);
  //         const {password, }
  //     }catch(error){

  //     }

  // },
};
