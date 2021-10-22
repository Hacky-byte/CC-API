import React from "react";
import "./Nav.css";
import { DropdownButton , Dropdown } from 'react-bootstrap';
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
} from "@material-ui/core";
// import { a } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    navas: {
        marginLeft: theme.spacing(10),
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(5),
        marginTop: "5px",
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
}));


const Nav = () => {

    const classes = useStyles();

    return (
        <AppBar style={{backgroundColor : "#32382a"}} position="static" id="navbar">
            <CssBaseline />
            <Toolbar>
                <h3 variant="h4" className={classes.logo}>
                    <a href="/" style={{color:"white", textDecoration: "none"}}>Home</a>
                </h3>
                <div className={classes.navas}>
                    <a to="#" className={classes.link}>
                    <DropdownButton  id="options" title="Services">
                            <Dropdown.Item href="#/action-1">Tele-Consultation</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Individual Consultation</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Crisis Intervention</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Group Counselling</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Psychiatric Services</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">After Our Service</Dropdown.Item>
                        </DropdownButton>
                    </a>
                    <a to="/reachus" className={classes.link}>
                        Reach Us
                    </a>
                    <a to="/faq" className={classes.link}>
                        FAQ
                    </a>
                    <a to="#" className={classes.link}>
                        <DropdownButton  id="options" title="Events">
                            <Dropdown.Item href="#/action-1">Happenings</Dropdown.Item>

                        </DropdownButton>
                    </a>
                    <a to="#" className={classes.link}>
                    <DropdownButton  id="options" title="Insta-Link">
                            <Dropdown.Item href="#/action-1">IWG</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">SWG</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">YourDost</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">MEDICAL</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">RCPSYCH</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">PenState</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">JED</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Mental Health</Dropdown.Item>
                        </DropdownButton>
                    </a>
                    <a to="/anecdotes" className={classes.link}>
                        Anecdotes
                    </a>
                    <a to="/people" className={classes.link}>
                        People
                    </a>
                </div>
            </Toolbar>
        </AppBar>
    )
};

export default Nav;
