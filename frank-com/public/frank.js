// const request = new XMLHttpRequest()
// request.open('GET', 'http://localhost:8888/friends.json')
// request.onreadystatechange = () => {
//   if (request.readyState === 4 && request.status === 200) {
//     console.log(request.response)
//   }
// }

// request.send()

// const script = document.createElement('script')
// script.src = 'http://localhost:8888/friends.js'
// script.onload = () => {
//   console.log(window.xxx)
// }
// document.body.appendChild(script)

// 函数(回调)
// window.x xx = (data) => {
//   console.log(data)
// }
// const script = document.createElement('script')
// script.src = 'http://localhost:8888/friends.js' // 调用函数
// document.body.appendChild(script)

// 随机函数
// const random = Math.random()
// window[random] = (data) => {
//   console.log(data)
// }
// const script = document.createElement('script')
// script.src = `http://localhost:8888/friends.js?functionName=${random}` // 调用函数
// document.body.appendChild(script)
// script.onload = () => {
//   script.remove() // 拿到数据之后，可以删掉
// }

// 封装
function jsonp (url) {
  return new Promise((resolve, reject) => {
    const random = Math.random()
    window[random] = (data) => {
      console.log(data)
      resolve(data)
    }
    const script = document.createElement('script')
    script.src = `${url}?callback=${random}` // 调用函数
    document.body.appendChild(script)
    script.onload = () => {
      script.remove() // 拿到数据之后，可以删掉
    }
    script.onerror = () => {
      reject()
    }
  })
}

// 使用jsonp
jsonp('http://localhost:8888/friends.js').then((data) => {
  console.log('data', data)
})