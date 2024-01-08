import axios from 'axios'

function Api() {

  const url = process.env.BASE_URL || 'http://localhost:3001'

  return axios.create({
    baseURL: url,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  })
}

export default Api
