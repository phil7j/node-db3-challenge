const knex = require('knex');
const config = require('../knexfile.js');

const db = knex(config.development);

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
  };

  function find() {
      return db('schemes');
  }

  function findById(id) {
      return db('schemes').where({ id })
  }

  function findSteps(id) {
      return db('steps as s')
      .select('sc.scheme_name','s.step_number', 's.instructions')
      .innerJoin('schemes as sc', 's.scheme_id', '=', 'sc.id')
      .where({scheme_id: id})
  }

  function add(scheme) {
     return   db('schemes').insert(scheme);
  }

  function update(changes,id){
    return db('schemes')
        .where({ id })
        .update(changes)
  }

  function remove(id){
    return db('schemes')
        .where({id})
        .del()
  }
