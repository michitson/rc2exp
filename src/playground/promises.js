const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('this is my rejected data')
  }, 5000)
})

console.log('before')




promise.then((data) => {
  console.log('2', data)
}).catch((err) => {
  console.log('err', err)
})


console.log('after')
