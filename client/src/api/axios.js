import Axios from 'axios'

const client = Axios.create({
    baseURL: 'http://159.89.80.186:3000/',
    json: true,
    withCredentials: true
  })

export {client}


const getLogin = async (token)=>{
    const GetLogin = await client.get(`/login`,{
        headers:{
            'AuthToken': token
        }
      })
    return GetLogin
 }
 
 const getProfile = async ()=>{
    const GetProfile = await client.get(`/profile`)
    return GetProfile
 }

export {getLogin}
export {getProfile}