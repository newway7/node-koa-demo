/*
 * @Author: huyh
 * @Github: 
 * @Date: 2019-05-10 13:46:06
 * @LastEditors: huyh
 * @LastEditTime: 2019-05-30 14:48:39
 * @description: users表的 sql操作
 */
const {query} = require('./query.js') 


/**
 * @description: 
 * @param num 第几页
 * @param size 每页多少条
 * @return: list
 */
const findUserList = function(num, size) {
  const sql = `SELECT * FROM Users LIMIT ${num}, ${size }`;
  return query(sql)
}


/**
 * @description: 获取用户表 总数
 * @return: count
 */
const getUserCount = function() {
  const sql = 'SELECT COUNT(id) AS count FROM Users'
  return query(sql)
}


module.exports={
  findUserList,
  getUserCount
}