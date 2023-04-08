import axios from 'axios';


export const DataApi = async (user) => await axios.post(`http://localhost:8000/users`, user)
export const getDataApi = async (user) => await axios.get(`http://localhost:8000/users`, user)
export const deleteDataApi = async (id) => await axios.delete(`http://localhost:8000/users/${id}`)
export const eEditDataApi = async (id) => await axios.delete(`http://localhost:8000/users/${id}`)
export const editDataApi = async (edit) => await axios.post(`http://localhost:8080/users/${edit.get('id')}`, edit )

