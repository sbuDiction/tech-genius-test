import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDown({
    items,
    selectedManager,
    onManagerChange
}) {
    // const [manager, setManager] = React.useState('');
    console.log(items);

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 80, width: 300, }}>
                <Select
                    sx={{ height: 30 }}
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={selectedManager}
                    onChange={e => onManagerChange(e.target.value)}
                    autoWidth
                // label="Age"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {items.map((item, i) => (
                        <MenuItem key={i} value={item.id}>{`${item.firstName} ${item.lastName}`}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
