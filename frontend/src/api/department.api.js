import axios from "axios";

export const createDepartment = (deparment, managerId) => axios.post('http://localhost:5000/departments/create', { deparment, managerId })
    .then(res => res.data)


export const getDeaprtments = () => axios.get('http://localhost:5000/departments')
    .then(res => res.data.departments)