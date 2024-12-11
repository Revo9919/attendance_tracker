import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { AddStudent } from "./AddStudent";
import { AddTeacher } from "./AddTeacher";
import { Attendance } from "./Attendance";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

export const Class = () => {
    const location = useLocation();
    const list = location.state.detail;

    return (
        <Container style={{ padding: "20px" }}>
            <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
                <Typography
                    variant="h4"
                    style={{ textAlign: "center", marginBottom: "20px" }}
                >
                    {list.standard} Dashboard
                </Typography>
                <Typography
                    variant="h6"
                    style={{ textAlign: "center", marginBottom: "20px", color: "#757575" }}
                >
                    Class Teacher: {list.classTeacher}
                </Typography>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                    <Attendance list={list} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-students">
                            Students
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <AddStudent list={list} />
                            </Dropdown.Item>
                            <Dropdown.Item
                                as={Link}
                                to={{ pathname: "/viewstudents", state: { detail: list } }}
                            >
                                View Students in Class
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-teachers">
                            Teachers
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <AddTeacher list={list} />
                            </Dropdown.Item>
                            <Dropdown.Item
                                as={Link}
                                to={{ pathname: "/viewteachers", state: { detail: list } }}
                            >
                                View Teachers in Class
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Paper>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/classes"
                >
                    Back to Classes
                </Button>
            </div>
        </Container>
    );
};
