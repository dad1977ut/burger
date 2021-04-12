const connection = require("./connection");
const orm = {
  selectall: function (table_name, cb) {
    connection.query(`select * from ${table_name}`, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertone: function (table_name, burger_object, cb) {
    connection.query(
      `insert into ${table_name} set ?`,
      burger_object,
      (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      }
    );
  },
  updateone: function (table_name, burger_array, cb) {
    connection.query(
      `update ${table_name} set ? where ?`,
      burger_array,
      (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      }
    );
  },
};
module.exports = orm;
