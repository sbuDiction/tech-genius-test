import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DropDown from '../components/DropDown';
import { EmployeeTable } from '../components/EmployeeTable';
import { StatusDropDown } from '../components/StatusDropDown';
import { DepartmentDropDown } from '../components/DepartmentDropDown';
import { useEffect, useState } from 'react';
import { getEmployees } from '../api/employees.api';


const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    padding: theme.spacing(0.3),
    textAlign: 'start',
    // color: theme.palette.text.secondary,
    boxShadow: 'none'
}));

export const EmployeeList = () => {
    const [managers, setManagers] = useState([]);

    const fetchManagers = async () => {
        setManagers(await getEmployees());
    }

    useEffect(() => {
        fetchManagers();
    },[])
    return (
        <>
            <Grid container spacing={5} columns={14}>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            width: 800,
                            // height: 200,
                            // backgroundColor: 'primary.dark',
                            // '&:hover': {
                            //     backgroundColor: 'primary.main',
                            //     opacity: [0.9, 0.8, 0.7],
                            // },
                            boxShadow: 0,

                        }}
                    >
                        <Box sx={{ flexGrow: 1, boxShadow: 0 }}>
                            <Grid container columns={16}>
                                <Grid item xs={8}>
                                    <Item >
                                        <h5>Status</h5>
                                    </Item>

                                </Grid>
                                <Grid item xs={8}>
                                    <Item>
                                        <StatusDropDown />
                                    </Item>
                                </Grid>
                            </Grid>
                            <Grid container columns={16}>
                                <Grid item xs={8}>
                                    <Item>
                                        <h5>Department</h5>
                                    </Item>

                                </Grid>
                                <Grid item xs={8}>
                                    <Item>
                                        <DepartmentDropDown />
                                    </Item>
                                </Grid>
                            </Grid>
                            <Grid container columns={16}>
                                <Grid item xs={8}>
                                    <Item>
                                        <h5>Manager</h5>
                                    </Item>

                                </Grid>
                                <Grid item xs={8}>
                                    <Item>
                                        <DropDown items={managers} />
                                    </Item>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <EmployeeTable />
                </Grid>
            </Grid>

        </>
    )
}