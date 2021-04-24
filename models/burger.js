const orm = require("../config/orm");
const burger = {
  all: function (cb) {
    orm.selectall("burgers", (res) => cb(res));
  },
  insert: function (burger_object, cb) {
    orm.insertone("burgers", burger_object, (res) => cb(res));
  },
  update: function (burger_array, cb) {
    orm.updateone("burgers", burger_array, (res) => cb(res));
  },
};
module.exports = burger;
