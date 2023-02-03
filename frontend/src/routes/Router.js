import { Routes, Route } from 'react-router-dom';
import { DepartmentCreate } from '../views/DepartmentCreate';
import { DepartmentList } from '../views/DepartmentList';
import { EmployeeCreate } from '../views/EmployeeCreate';
import { EmployeeList } from '../views/EmployeeList';

export const Router = () => {
    return (
        <Routes>
            <Route path='/employees' element={<EmployeeList />}></Route>
            <Route path='/employee/add' element={<EmployeeCreate />}></Route>
            <Route path='/departments' element={<DepartmentList />}></Route>
            <Route path='/departments/add' element={<DepartmentCreate />}></Route>
            <Route path='/departments/edit/:departmentId' element={<DepartmentCreate />}></Route>
            <Route path='/employee/edit/:employeeId' element={<EmployeeCreate />}></Route>
        </Routes>
    );
}