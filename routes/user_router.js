/*
 * @Author: huyh
 * @Github: 
 * @Date: 2019-05-10 11:36:28
 * @LastEditors: huyh
 * @LastEditTime: 2019-05-30 14:50:08
 * @description: 请求路由封装
 */
const controller = require('../controller/user_controller.js')
const router = require('koa-router')()

/**
 * 获取用户分页数据
 */
router.get('/getUserList', controller.getUserList)

module.exports = router
