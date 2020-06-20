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
// var Repo = require("./taskRepositpry");

"use strict";
var Task = function (name) {
  this.name = name;
  this.completed = false;
};

// Making code run like a fish
Task.prototype.complete = function () {
  console.log("Completing task: " + this.name);
};

Task.prototype.save = function () {
  console.log("Saving Task: " + this.name);
  // Repo.save(this);
};

var myTask = new Task("LegaCY Task");
myTask.complete();
myTask.save();

var urgentTask = function (name, priority) {
  Task.call(this, name);
};

// sub classing
urgentTask.prototype = Object.create(Task.prototype);

// After all the subclassing I can actually add more custom functions
urgentTask.prototype.notify = function () {
  console.log("notifying important people");
};

urgentTask.prototype.save = function () {
  this.notify();
  console.log("Do special stuff before saving ");
  Task.prototype.save.call(this);
};

var ut = new urgentTask("This is urgent ", 1);
ut.complete();
ut.save();
console.log(ut);
module.exports = Task;
