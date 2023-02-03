import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DropDown from '../components/DropDown';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { getEmployees } from '../api/employees.api';
import { StatusDropDown } from '../components/StatusDropDown';
import { createDepartment } from '../api/department.api';


const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(0.3),
    textAlign: 'start',
    boxShadow: 'none'
}));


export const DepartmentCreate = () => {
    const [managers, setManagers] = useState([]);
    const [selectedManager, setSelectedManager] = useState('');
    const [status, setStatus] = useState('');
    const [deparment, setDepartment] = useState({
        name: '',
        status: 'Active'
    });

    const handleSave = () => {
        console.log(deparment);
        console.log(selectedManager);
        console.log(status);
        createDepartment(deparment, selectedManager).then(data => {
            const { isCreated } = data;
        })
    }

    const fetchEmployees = async () => {
        setManagers(await getEmployees())
    }

    useEffect(() => {
        fetchEmployees();
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
                                        <TextField onChange={e => setDepartment({ ...deparment, name: e.target.value })} sx={{ width: 400 }} size='small' id="outlined-basic" variant="outlined" />
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
                                        <DropDown
                                            items={managers}
                                            selectedManager={selectedManager}
                                            onManagerChange={setSelectedManager}
                                        />
                                    </Item>
                                </Grid>
                            </Grid>

                            <Grid container columns={16}>
                                <Grid item xs={8}>
                                    <Item>
                                        <h5>*Status</h5>
                                    </Item>

                                </Grid>
                                <Grid item xs={8}>
                                    <Item>
                                        <StatusDropDown
                                            status={status}
                                            onStatusChange={setStatus}
                                        />
                                    </Item>
                                </Grid>
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