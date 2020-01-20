/*
 * @Author: huyh
 * @Github: 
 * @Date: 2019-05-30 14:21:54
 * @LastEditors: huyh
 * @LastEditTime: 2019-05-30 14:47:21
 * @description: 封装请求连接数据  返回正常 和 异常情况
 */
const mysql = require('mysql');
const config = require('../config/default.js')

const pool  = mysql.createPool({
  host     : config.database.HOST,
  user     : config.database.USERNAME,
  password : config.database.PASSWORD,
  database : config.database.DATABASE
});


exports.query = function( sql, values ) {
  return new Promise(( resolve, reject ) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        console.log(err)
        resolve( err )
      } else {
        connection.query(sql, values, ( err, rows) => {
          if ( err ) {
            reject( err )
          } else {
            resolve( rows )
          }
          connection.release()
        })
      }
    })
  })
}