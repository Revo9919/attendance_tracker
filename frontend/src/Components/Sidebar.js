import React, { useState, useEffect } from "react";
import "./sidebar.css";
import axios from 'axios';
import { AddClass } from './Class/AddClass';
import { Link } from "react-router-dom";

export const Sidebar = () => {
    const [classList, setClassList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/class/viewClass")
            .then((response) => {
                setClassList(response.data);
                console.log(response.data);
            })
            .catch(error => console.error(`Error: ${error}`));
    }, []);

    return (
        <div className="sidebar">
            

            <div className="sidebar_menu">
                {classList.map((list, index) => (
                    <div key={index} className="sidebar_menu_item">
                        <Link 
                            className="sidebar_link" 
                            to={{ pathname: "/class/view", state: { detail: list } }}
                        >
                            {list.standard}
                        </Link>
                    </div>
                ))}
            </div>

            <div className="sidebar_footer">
                <AddClass />
            </div>
        </div>
    );
};
