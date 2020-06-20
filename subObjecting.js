var urgentTask = new Task("Urgent Task");
urgentTask.priority = 2;
urgentTask.notify = function () {
  console.log("notifying important people");
};
urgentTask.complete();
urgentTask.save = function () {
  this.notify();
  Task.prototype.save.call(this);
};

urgentTask.save();
