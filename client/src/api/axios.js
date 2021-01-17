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

 const postProfile = async (user, date, weight, height, selected_radio, selected_select )=>{
  const PostProfile = await client.post(`/profile`,{
      name: user,
      birth: date,
      weightTarget: +weight,
      height: +height,
      sex: selected_radio,
      objective: selected_select,
  })
  return PostProfile
}
export {getLogin}
export {getProfile}
export {postProfile}