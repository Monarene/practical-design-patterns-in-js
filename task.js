// var task = Object.create(Object.prototype);
// task.title = "My task";
// task.description = "This description";
// Object.defineProperty(task, "toString", {
//   value: function () {
//     return this.title + " " + this.description;
//   },
//   writable: true,
//   enumerable: true,
//   configurable: true,
// });

// console.log(task.title);
// console.log(task.toString());

// This name and all that stuff
"use strict";
var Repo = require("./taskRepositpry");
var Task = function (data) {
  this.name = data.name;
  this.completed = false;
};

// Making code run like a fish
Task.prototype.complete = function () {
  console.log("Completing task: " + this.name);
};

Task.prototype.save = function () {
  console.log("Saving Task: " + this.name);
  Repo.save(this);
};

module.exports = Task;
