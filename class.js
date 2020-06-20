"use strict";
class Task {
  constructor(name) {
    this.name = name;
    this.completed = false;
  }

  complete = function () {
    console.log("Completing task: " + this.name);
  };

  save = function () {
    console.log("Saving Task: " + this.name);
  };
}
