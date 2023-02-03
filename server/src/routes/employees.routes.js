import express from 'express';
import { createEmployee, getEmployees } from '../controllers/employees.contoller.js';

const employeesRoutes = express.Router();

employeesRoutes.get("/employees", getEmployees);
employeesRoutes.post('/employee/create', createEmployee);

export {
    employeesRoutes
}