import Axios from "axios";

const client = Axios.create({
  baseURL: "https://weight-app.matromero.cl/",
  json: true,
  withCredentials: true
});

export { client };

const getLogin = async token => {
  const GetLogin = await client.get(`/login`, {
    headers: {
      AuthToken: token
    }
  });
  return GetLogin;
};

const getProfile = async () => {
  const GetProfile = await client.get(`/profile`);
  return GetProfile;
};

const getTracking = async () => {
  const GetTracking = await client.get(`/tracking`);
  return GetTracking;
};

const postProfile = async (
  user,
  date,
  weight,
  height,
  selected_radio,
  selected_select
) => {
  const PostProfile = await client.post(`/profile`, {
    name: user,
    birth: date,
    weightTarget: +weight,
    height: +height,
    sex: selected_radio,
    objective: selected_select
  });
  return PostProfile;
};

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

const getTrackingId = async (id) => {
  const getDataTracking = await client.get(`/tracking/${id}`)
  return getDataTracking
}

export { getLogin }
export { getProfile }
export { postProfile }
export { getTracking }
export { postTracking }
export { getTrackingId }
