import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const StatusDropDown = ({
    status,
    onStatusChange

}) => {

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 80, width: 300, }}>
                <Select
                    sx={{ height: 30 }}
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={status}
                    onChange={e => onStatusChange(e.target.value)}
                    autoWidth
                // label="Age"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value='Active'>Active</MenuItem>
                    <MenuItem value='Inactive'>Inactive</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
