import express from 'express';
import { createDepartment, getDeaprtments } from '../controllers/departments.controller.js';

const departmentsRoutes = express.Router();

departmentsRoutes.get("/departments", getDeaprtments);
departmentsRoutes.post('/departments/create', createDepartment);

export {
    departmentsRoutes
}