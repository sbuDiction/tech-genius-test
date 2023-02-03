import { Sequelize } from 'sequelize';


// database set up
export const sequelize = new Sequelize('student_collab', 'user', 'pass', {
    dialect: 'sqlite',
    host: './database.db'
});