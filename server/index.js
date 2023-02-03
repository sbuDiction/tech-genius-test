import express from 'express';
import cors from 'cors';
import { sequelize } from './src/config/sequalize.init.js';
import { Employee } from './src/models/Employee.model.js';
import { employeesRoutes } from './src/routes/employees.routes.js';
import { departmentsRoutes } from './src/routes/departments.routes.js';


const app = express();

sequelize.sync().then(() => {
    Employee.sync();
})


app.use(cors());
app.use(express.json());
app.use(
    employeesRoutes,
    departmentsRoutes
);


app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({ error: err.message });
});

app.use((req, res) => {
    res.status(404);
    res.send({ error: "Sorry, can't find that" });
});



const listener = app.listen(process.env.PORT || 5000, () => {
    console.log(`app running on port ${listener.address().port}`);
});