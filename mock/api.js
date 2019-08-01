const fs = require('fs')

function fromJosnFile(fileName) {
  return (req, res) => {
    const data = fs.readFileSync(`mock/data/${fileName}.json`).toString();
    const json = JSON.parse(data)
    return res.json(json)
  }
}

function fromJosnDetailFile(fileName) {
  return (req, res) => {
    const data = fs.readFileSync(`mock/data/${fileName}.json`).toString()
    const jsonData = JSON.parse(data)
    var result = {}
    for (var i = 0; i < jsonData.message.length; i++) {
      // params固定写法，表示存储的参数，它里面存储了一个id参数
      if (jsonData.message[i].id === Number(req.params.id)) {
        result = {
          "status": 0,
          "message": [jsonData.message[i]]
        }
        break;
      }
    }
    return res.json(result)

  }
}
const proxy = {
  'GET /api/getSwape': fromJosnFile('Swape'),
  'GET /api/getProductList': fromJosnFile('GoodProductList'),
  'GET /api/getProductInfo/:id': fromJosnDetailFile('ProductInfo')
}
module.exports = proxy;
