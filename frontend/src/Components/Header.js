import React from 'react';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ViewAttendance } from './Attendance/ViewAttendance';
import { Student } from './Student/Student';
import { Teacher } from './Teacher/Teacher';

export const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    School Dashboard
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/viewattendance">
                            Attendance
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Students" id="students-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/addnewstudent">
                                Add New Student
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/viewallstudents">
                                View All Students
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Teachers" id="teachers-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/addnewteacher">
                                Add New Teacher
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/viewallteachers">
                                View All Teachers
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
