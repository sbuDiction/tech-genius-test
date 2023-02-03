import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequalize.init.js";

export const Department = sequelize.define("Department", {
    name: DataTypes.TEXT,
    status: DataTypes.TEXT
})