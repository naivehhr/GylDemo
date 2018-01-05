// import qs from "qs"

export default function req(url, method, args) {
  return async (dispatch,store) => {
    return new Promise((resolve, reject) => {
      let meta = {}
      if(method == 'GET') {
        let headers = {
        }
        meta.method = "GET"
        meta.headers = headers
        meta.credentials = 'include'
      } else {
        let headers = {
          "Accept": "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        }
        meta.headers = headers
        meta.body = queryStr
        meta.method = "POST"
        meta.credentials = 'include'
      }
      const tm = setTimeout(() => {
        reject({errorCode: 9997, errorMessage: '网络不稳定，请稍后刷新重试'})
        Toast.showShortCenter('网络不稳定，请稍后刷新重试')
        return
      }, 20000)
      fetch(
        url
      ).then(function(data) {
        console.log(data);
        resolve(data)
      }).catch(function(e) {
        console.log("Oops, error");
        reject(data)
      });
    })
  }
}


export function post(url, args) {
  return req.call(this, url, 'POST', args)
}

export function get(url, args) {
  return req.call(this, url, 'GET', args)
}