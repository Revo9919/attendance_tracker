import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { Table } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

export const ShowAttendance = () => {
  const [allStudent, setAllStudent] = useState([]);
  const location = useLocation();
  const list = location.state.detail;

  useEffect(() => {
    fetch(`/attendance/viewAttendance/${list._id}`)
      .then((res) => res.json())
      .then((data) => {
        setAllStudent(data.result);
      })
      .catch((err) => {
        console.error('Error fetching attendance data:', err);
      });
  }, [list]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {allStudent && allStudent.length > 0 ? (
        allStudent.map((item, index) => (
          <div key={index} style={{ marginBottom: '30px' }}>
            <h4 style={{ color: '#333', marginBottom: '15px' }}>Teacher Name: {item.teacher}</h4>
            <Table striped bordered hover responsive style={{ textAlign: 'center' }}>
              <thead style={{ backgroundColor: '#f8f9fa' }}>
                <tr>
                  <th>Present</th>
                  <th>Absent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{item.present}</td>
                  <td>{item.absent}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        ))
      ) : (
        <p style={{ textAlign: 'center', color: '#777' }}>No attendance data available.</p>
      )}
    </div>
  );
};
