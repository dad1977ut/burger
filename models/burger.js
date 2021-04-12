const orm = require("../config/orm");
const burger = {
  all: function (cb) {
    orm.selectall("burgers", (res) => cb(res));
  },
};
