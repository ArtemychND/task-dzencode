const orders = [
  {
    id: 1,
    title: 'Order 1',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products () { return products }
  },
  {
    id: 2,
    title: 'Order 2',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products () { return products }
  },
  {
    id: 3,
    title: 'Order 3',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products () { return products },
  }
]

const products = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 1,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 2,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.jpg',
    title: 'Product 2',
    type: 'Monitors',
    specification: 'Specification 2',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  }
]

const ws = require('ws');

const webServer = new ws.Server({port: 5070});

webServer.on('connection', (ws) => {
  ws.on('error', (e) => console.log(e));

  ws.on('message', (message) => {
    const messageJSON = JSON.parse(message)
    if (messageJSON == 'products') {
      ws.send(JSON.stringify(products))
    } else if(typeof messageJSON === 'object') {
      const deleteIndex = products.findIndex((p) => p.id == messageJSON.id)
      products.splice(deleteIndex, 1)
      ws.send(JSON.stringify(products))
    } else {
      ws.send(JSON.stringify(orders))
    }
  })
})