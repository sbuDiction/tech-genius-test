import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const DepartmentDropDown = ({ name, items = [], size }) => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 80, width: 300, }}>
                <Select
                    sx={{ height: 30 }}
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={age}
                    onChange={handleChange}
                    autoWidth
                // label="Age"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {items.map((item, i) => (
                        <MenuItem value={item.id}>{`${item.firstName} ${item.lastName}`}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
