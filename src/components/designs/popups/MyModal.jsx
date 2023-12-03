import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

const MyModal = ({ open, onClose, onSave, initialData }) => {
    const [formData, setFormData] = useState(initialData);

    const handleChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleSave = () => {
        onSave(formData);
        onClose();
    };

    useEffect(() => {
        setFormData(initialData)
    }, [initialData])

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>Edit Details</DialogTitle>
            <DialogContent style={{ flexDirection: 'column', paddingTop: 10, paddingBlock: 10, display: 'flex', gap: 20 }}>

                <TextField
                    label="ID"
                    fullWidth
                    value={formData?.id}
                    disabled
                    onChange={(e) => handleChange('id', e.target.value)}
                />
                <TextField
                    label="Name"
                    fullWidth
                    value={formData?.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                />
                <TextField
                    label="Email"
                    fullWidth
                    value={formData?.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                />
                <TextField
                    label="Role"
                    fullWidth
                    value={formData?.role}
                    onChange={(e) => handleChange('role', e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleSave} color="primary">
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default MyModal;