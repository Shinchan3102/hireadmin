import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

function SelectInput({ name, value, setData, label, items }) {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleChange = (event) => {
        // setSelectedItems(event.target.value);
        console.log(event.target.value)
        setData((prev) => { return { ...prev, [name]: event.target.value } });
    };

    // const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="multi-select-label">{label}</InputLabel>
                <Select
                    labelId="multi-select-label"
                    id="multi-select"
                    multiple
                    value={value}
                    onChange={handleChange}
                    renderValue={(selected) => (
                        <div>
                            {selected.map((v) => (
                                <Button key={v} variant="outlined" size="small">
                                    {(items?.filter((it) => it.id == v))[0].name}
                                </Button>
                            ))}
                        </div>
                    )}
                >
                    {items.map((item, index) => (
                        <MenuItem key={index} value={item?.id}>
                            {item.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default SelectInput;
