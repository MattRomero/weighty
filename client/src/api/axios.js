import Axios from 'axios'

const client = Axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/weight-app.matromero.cl:3000',
  json: true,
  withCredentials: true
})

export { client }


const getLogin = async (token) => {
  const GetLogin = await client.get(`/login`, {
    headers: {
      'AuthToken': token
    }
  })
  return GetLogin
}

const getProfile = async () => {
  const GetProfile = await client.get(`/profile`)
  return GetProfile
}

const getTracking = async () => {
  const GetTracking = await client.get(`/tracking`)
  return GetTracking
}

const postProfile = async (user, date, weight, height, selected_radio, selected_select) => {
  const PostProfile = await client.post(`/profile`, {
    name: user,
    birth: date,
    weightTarget: +weight,
    height: +height,
    sex: selected_radio,
    objective: selected_select,
  })
  return PostProfile
}

const postTracking = async (name, objective, weightTarget, sex, height) => {
  const PostTracking = await client.post(`/tracking`, {
    name: name,
    objective: objective,
    weightTarget: +weightTarget,
    sex: sex,
    height: +height,
  })
  return PostTracking
}
export { getLogin }
export { getProfile }
export { postProfile }
export { getTracking }
export { postTracking }