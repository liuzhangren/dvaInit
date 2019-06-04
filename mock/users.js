const Mock = require('mockjs');
const userData=Mock.mock({
    'data|10':[{
        'key|+1':1,
        'name':'Edward King',
        'age':32
    }]
})

module.exports={
    [`GET /api/test`](req,res){
        res.json(userData)
    }
}