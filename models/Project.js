//model for the individual project
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const projectSchema = new Schema({
  title: String,
  tools: String,
  link: String,
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Task"
    }
  ]
});

const Project = model("Project", projectSchema);

module.exports = Project;
