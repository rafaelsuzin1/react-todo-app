const express = require('express')

module.exports = function(server){

    //API ROUTERS
    const router = express.Router()
    server.use('/api', router)

    //TODO ROUTERS
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')

}