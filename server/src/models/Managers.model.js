import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequalize.init.js";

export const Managers = sequelize.define("Managers", {
    managerId: DataTypes.INTEGER,
    departmentId: DataTypes.INTEGER
})