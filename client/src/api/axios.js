import Axios from 'axios'

const client = Axios.create({
    baseURL: 'http://159.89.80.186:3000/',
    json: true,
    withCredentials: true
  })

export {client}


