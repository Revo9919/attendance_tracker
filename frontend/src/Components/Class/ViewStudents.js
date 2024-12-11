import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Class } from './Class';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

export const ViewStudents = () => {
    const location = useLocation();
    const list = location.state.detail;
    const [student, setStudent] = useState([]);

    useEffect(() => {
        fetch(`/student/view/${list._id}`)
            .then((res) => res.json())
            .then((data) => {
                setStudent(data.result);
            })
            .catch((err) => {
                console.error('Error fetching student data:', err);
            });
    }, [list]);

    return (
        <Container style={{ padding: '20px' }}>
            <Class />
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h5" style={{ marginBottom: '20px', textAlign: 'center' }}>
                    Students in Class: {list.className}
                </Typography>
                <Table striped bordered hover responsive>
                    <thead style={{ backgroundColor: '#f5f5f5' }}>
                        <tr>
                            <th>S.No</th>
                            <th>Student Name</th>
                            <th>Registration No</th>
                        </tr>
                    </thead>
                    <tbody>
                        {student && student.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.studentName}</td>
                                <td>{item.registration_no}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                {student.length === 0 && (
                    <Typography variant="body1" style={{ textAlign: 'center', marginTop: '20px', color: '#757575' }}>
                        No students found.
                    </Typography>
                )}
            </Paper>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Button variant="contained" color="primary">
                    Back to Classes
                </Button>
            </div>
        </Container>
    );
};
