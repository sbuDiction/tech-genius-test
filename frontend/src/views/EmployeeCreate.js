import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DropDown from '../components/DropDown';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { createEmployee, getEmployees } from '../api/employees.api';
import { NavLink, useLocation } from 'react-router-dom';
import { StatusDropDown } from '../components/StatusDropDown';


const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(0.3),
    textAlign: 'start',
    boxShadow: 'none'
}));

export const EmployeeCreate = () => {
    const location = useLocation();
    console.log(location.pathname);
    const [managers, setManagers] = useState([])
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        telephoneNumber: '',
        emailAddress: '',
        employeeManager: '',
        status: 'Active'
    });
    const handleSave = async () => {
        await createEmployee(user).then(data => {
            const { isCreated } = data;
            if (isCreated) return <NavLink to={'/employees'} />
        })

    }

    const fetchManagers = async () => {
        console.log('some');
        setManagers(await getEmployees())

    }

    useEffect(() => {
        fetchManagers()
    }, [])
    return (
        <>
            <Grid container spacing={1} columns={14}>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            width: 800,
                            boxShadow: 0,

                        }}
                    >
                        <Box sx={{ flexGrow: 1, boxShadow: 0 }}>
                            <Grid container columns={16}>
                                <Grid item xs={8}>
                                    <Item >
                                        <h5>*Name</h5>
                                    </Item>

                                </Grid>
                                <Grid item xs={8}>
                                    <Item>
                                        <TextField type={'text'} onChange={e => setUser({ ...user, firstName: e.target.value })} sx={{ width: 400 }} size='small' id="outlined-basic" variant="outlined" />
                                    </Item>
                                </Grid>
                            </Grid>
                            <Grid container columns={16}>
                                <Grid item xs={8}>
                                    <Item>
                                        <h5>*Surname</h5>
                                    </Item>

                                </Grid>
                                <Grid item xs={8}>
                                    <Item>
                                        <TextField onChange={e => setUser({ ...user, lastName: e.target.value })} sx={{ width: 400 }} size='small' id="outlined-basic" variant="outlined" />
                                    </Item>
                                </Grid>
                            </Grid>
                            <Grid container columns={16}>
                                <Grid item xs={8}>
                                    <Item>
                                        <h5>*Telephone Number</h5>
                                    </Item>

                                </Grid>
                                <Grid item xs={8}>
                                    <Item>
                                        <TextField onChange={e => setUser({ ...user, telephoneNumber: e.target.value })} sx={{ width: 400 }} size='small' id="outlined-basic" variant="outlined" />
                                    </Item>
                                </Grid>
                            </Grid>
                            <Grid container columns={16}>
                                <Grid item xs={8}>
                                    <Item>
                                        <h5>*Email Address</h5>
                                    </Item>

                                </Grid>
                                <Grid item xs={8}>
                                    <Item>
                                        <TextField onChange={e => setUser({ ...user, emailAddress: e.target.value })} sx={{ width: 400 }} size='small' id="outlined-basic" variant="outlined" />
                                    </Item>
                                </Grid>
                            </Grid>

                            <Grid container columns={16}>
                                <Grid item xs={8}>
                                    <Item>
                                        <h5>*Manager</h5>
                                    </Item>

                                </Grid>
                                <Grid item xs={8}>
                                    <Item>
                                        <DropDown items={managers} />
                                    </Item>
                                </Grid>
                            </Grid>

                            <Grid container columns={16}>
                                <Grid item xs={8}>
                                    <Item>
                                        <h5>*Status</h5>
                                    </Item>

                                </Grid>
                                {location.pathname === '/employee/add' ?
                                    ""
                                    :
                                    <Grid item xs={8}>
                                        <Item>
                                            <StatusDropDown />
                                        </Item>
                                    </Grid>
                                }
                            </Grid>


                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Stack sx={{ float: 'right' }} direction="row" spacing={2}>
                        <Button onClick={handleSave} size='small' variant="contained">Save</Button>
                        <Button size='small' variant="contained">Cancel</Button>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}