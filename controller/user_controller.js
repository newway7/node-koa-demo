const mysql = require('../lib/user_sql.js')


/**
 * @description: 查看用户表 分页信息
 * @param {type} 
 * @return: list, total
 */
exports.getUserList = async (ctx, next) => {
 
    let res = await ctx.query;
    let pageNumer = 1;
    let pageSize = 10;
   
    if (res.pageNumber) {
      pageNumer = res.pageNumber
    }
    if (res.pageSize) {
      pageSize = parseInt(res.pageSize) 
    }
    
    //页数
    let num = (Number(pageNumer) - 1)*pageSize;
    let total = await mysql.getUserCount()
    await mysql.findUserList(num, pageSize) 
    .then(result => {
      ctx.body = {
        result: result,
        total: total
      }
    }).catch(() => {
      ctx.body = 'error'
    })
   
    
  }