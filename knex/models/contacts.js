const bookshelf = require('./bookshelf');
const users = require("./users.js");

const contacts = bookshelf.Model.extend({
  tableName: 'contacts',
  created_by: function () {
    return this.belongsTo(users, "created_by");
  },
  idAttribute: 'id',
  hasTimestamps: true
})

module.exports = contacts