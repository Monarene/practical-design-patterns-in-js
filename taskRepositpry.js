var repo = function () {
  var db = {};

  var get = function (id) {
    console.log("Getting Task " + id);
    return {
      name: "new Task from db",
    };
  };

  var save = function (task) {
    console.log("Saving " + task.name);
  };
  return {
    get: get,
    save: save,
  };
};

module.exports = repo();
