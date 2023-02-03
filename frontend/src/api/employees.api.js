import axios from 'axios';

export const getEmployees = () => axios.get('http://localhost:5000/employees')
    .then(res => res.data.employees);


export const createEmployee = (user) => axios.post('http://localhost:5000/employee/create', user)
    .then(res => res.data)