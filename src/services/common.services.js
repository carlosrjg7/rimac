import axios from 'axios'

const baseURL = 'https://rimac-front-end-challenge.netlify.app/'

const PATH = (endpoint) => `api/${endpoint}`

axios.defaults.baseURL = baseURL

export const getData = async (endpoint) => {
  try {
    const response = await axios.get(PATH(endpoint))
    return response.data
  } catch (error) {
    console.error('Error en la solicitud GET:', error)
    throw error
  }
}

export const postData = async (endpoint, data) => {
  try {
    const response = await axios.post(endpoint, data)
    return response.data
  } catch (error) {
    console.error('Error en la solicitud POST:', error)
    throw error
  }
}
