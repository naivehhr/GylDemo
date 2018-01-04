
export default function req(url, method, args) {
  return async (dispatch,store) => {
    return new Promise((resolve, reject) => {

    })
  }
}


export function post(url, args) {
  return req.call(this, url, 'POST', args)
}

export function get(url, args) {
  return req.call(this, url, 'GET', args)
}