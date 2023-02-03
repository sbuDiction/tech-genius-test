import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequalize.init.js";

export const Employee = sequelize.define("Employee", {
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    telephoneNumber: DataTypes.TEXT,
    emailAddress: DataTypes.TEXT,
    employeeManager: DataTypes.TEXT,
    status: DataTypes.TEXT
})