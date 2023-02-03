import { sequelize } from "../config/sequalize.init.js";
import { Department } from "../models/Department.model.js";
import { Managers } from "../models/Managers.model.js";

export const getDeaprtments = async (req, res) => {
    await sequelize.query(
        `SELECT
         Departments.id, Departments.name, 
         Departments.status, 
         Employees.firstName, 
         Employees.lastName, 
         Managers.managerId
         FROM Managers INNER JOIN 
         Departments ON 
         Departments.id = departmentId 
         INNER JOIN Employees ON Employees.id = managerId;`
    ).then(departments => {
        console.log(departments);
        res.json({
            departments: departments[0]
        })
    })
}



export const createDepartment = async (req, res) => {
    const { deparment, managerId } = req.body;

    await Department.create(deparment).then(async (newDepartment) => {
        const { id } = newDepartment.dataValues;
        await Managers.create({ managerId: managerId, departmentId: id });
        res.json({
            isCreated: true
        })
    }).catch(() => {
        res.json({
            isCreated: false
        })
    })
}


export const editDepartment = async (req, res) => {

}