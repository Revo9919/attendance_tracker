import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

export const AllStudent = () => {
    const [allStudent, setAllStudent] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/student/viewAllStudents")
            .then((response) => {
                setAllStudent(response.data);
                console.log(response.data);
            })
            .catch(error => console.error(`Error: ${error}`));
    }, []);

    return (
        <Container style={{ padding: '20px' }}>
            <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                <Typography variant="h5" style={{ textAlign: 'center', marginBottom: '20px' }}>
                    All Students
                </Typography>
                <Table striped bordered hover responsive style={{ textAlign: 'center' }}>
                    <thead style={{ backgroundColor: '#f5f5f5' }}>
                        <tr>
                            <th>S.No</th>
                            <th>Student Name</th>
                            <th>Registration No</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allStudent && allStudent.map((list, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{list.studentName}</td>
                                <td>{list.registration_no}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                {allStudent.length === 0 && (
                    <Typography variant="body1" style={{ textAlign: 'center', marginTop: '20px', color: '#757575' }}>
                        No students found.
                    </Typography>
                )}
            </Paper>
        </Container>
    );
};
