import { Employee } from "../models/Employee.model.js";

export const createEmployee = async (req, res) => {
    // const { firstName, lastName, telephoneNumber, emailAddress, employeeManager } = req.body;
    await Employee.create(req.body).then(() => {
        res.json({
            isCreated: true
        })
    }).catch(() => {
        res.json({
            isCreated: false
        })
    })
}



export const getEmployees = async (req, res) => {
    await Employee.findAll().then(employees => {
        console.log(employees);
        res.json({
            employees
        })
    })
}



export const editEmployee = async (req, res) => { 
    
}