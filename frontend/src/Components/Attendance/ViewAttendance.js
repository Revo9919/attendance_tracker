import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { Dialog, DialogActions, DialogTitle } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const ViewAttendance = () => {
    const [classList, setClassList] = useState([]);
    const [open, setOpen] = useState(false);

    // Handle dialog open and close
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Fetch class list
    useEffect(() => {
        axios
            .get("http://localhost:8000/class/viewClass")
            .then((response) => {
                setClassList(response.data);
                console.log(response.data);
            })
            .catch((error) => console.error(`Error: ${error}`));
    }, []);

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleOpen}
                style={{ marginBottom: "20px" }}
            >
                View Attendance
            </Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title" style={{ textAlign: "center" }}>
                    Please Select a Class
                </DialogTitle>
                <div style={{ padding: "10px 20px" }}>
                    {classList.map((list, index) => (
                        <div key={index} style={{ marginBottom: "15px", textAlign: "center" }}>
                            <Button variant="outlined" color="secondary">
                                <Link
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                    to={{
                                        pathname: "/showattendance",
                                        state: { detail: list },
                                    }}
                                >
                                    {list.standard}
                                </Link>
                            </Button>
                        </div>
                    ))}
                </div>
                <DialogActions style={{ justifyContent: "center", padding: "10px" }}>
                    <Button
                        variant="contained"
                        onClick={handleClose}
                        color="secondary"
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
