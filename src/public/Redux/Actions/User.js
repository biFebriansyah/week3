import axios from 'axios';

export const getEngineer = (username) => {
  console.log('masuk Engineer')
  return {
    type: 'GET_USER',
    payload: axios.get('http://192.168.1.17:4000/engineer/' + username)
  }
}

export const getCompany = (username) => {
  console.log('masuk company')
  return {
    type: 'GET_USER',
    payload: axios.get('http://192.168.1.17:4000/company/' + username)
  }
}

export const getEngineer2 = (username) => {

  return async (dispatch) => {
    try {
      dispatch({
        type: 'GET_USER'
      })
      
      const getData = axios.get('http://192.168.1.17:4000/company/' + username)
      if (getData) {
        dispatch({
          type: ''
        })
      }
      
    } catch (error) {
      
    }
}
