import axios from 'axios'

export const path = 'https://jehielmartinezserver.herokuapp.com/api'

export async function getProfile () {
  return axios({
    url: `${path}/profile`,
    method: 'GET'
  })
}
export async function getEducation () {
  return axios({
    url: `${path}/educations`,
    method: 'GET'
  })
}
export async function getExperience () {
  return axios({
    url: `${path}/experiences`,
    method: 'GET'
  })
}
export async function getProjects () {
  return axios({
    url: `${path}/projects`,
    method: 'GET'
  })
}
