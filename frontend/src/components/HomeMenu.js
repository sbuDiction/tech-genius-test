import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { NavLink } from 'react-router-dom';

export const HomeMenu = ({ toggle }) => {

    return (
        <>
            <Box
                sx={{
                    width: 250,
                    height: 400,
                }}
                hidden={toggle}
            >

                <Paper sx={{ width: 320, maxWidth: '100%', boxShadow: 1 }}>
                    <MenuList>
                        <MenuItem>
                            <ListItemIcon>
                                <PeopleAltIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>
                                <NavLink to={'/employees'}>Empoyees</NavLink>
                            </ListItemText>

                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <ApartmentIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>
                                <NavLink to={'/departments'}>Departments</NavLink>
                            </ListItemText>

                        </MenuItem>
                    </MenuList>
                </Paper>
            </Box>
        </>
    )
}