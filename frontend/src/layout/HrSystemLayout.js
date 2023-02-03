import * as React from 'react';
import Box from '@mui/material/Box';
import { Header } from '../components/Header';
import { HomeMenu } from '../components/HomeMenu';
import { Main } from '../components/Main';
import Container from '@mui/material/Container';
import { EmployeeCreate } from '../views/EmployeeCreate';
import { DepartmentList } from '../views/DepartmentList';
import { DepartmentCreate } from '../views/DepartmentCreate';
import { Router } from '../routes/Router';

export const HrSystemLayout = () => {
    const [toggle, setToggle] = React.useState(true);

    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <>
            <Container >
                <Box sx={{ width: 1 }}>
                    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={5}>
                        <Box gridColumn="span 12">
                            {/* Menu section */}
                            <Header
                                onToggle={handleToggle}

                            />
                        </Box>
                        <Box gridColumn="span 4">
                        </Box>
                        <Box gridColumn="span 8">
                        </Box>
                        <Box gridColumn="span 3">
                            {/* <Item>xs=8</Item> */}
                            <HomeMenu
                                toggle={toggle}
                            />
                        </Box>
                        <Box gridColumn="span 8">
                            {/* <Item>xs=8</Item> */}
                            {/* <h5 className='MuiTypography-h1'>Employees</h5> */}
                            {/* <Main /> */}
                            {/* <EmployeeCreate /> */}
                            {/* <DepartmentList /> */}
                            {/* <DepartmentCreate /> */}
                            <Router />
                        </Box>
                    </Box>
                </Box>
            </Container>

        </>
    )
}