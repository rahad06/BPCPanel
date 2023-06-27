import React from 'react';
import { Link } from 'react-router-dom';
import {Drawer, List, ListItem, ListItemText} from '@mui/material'

const Navbar = () => {
    // const classes = useStyles();

    return (
        <Drawer variant="permanent" anchor="right" 
        >
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={Link} to="/essays">
                    <ListItemText primary="Essays" />
                </ListItem>
                <ListItem button component={Link} to="/research-projects">
                    <ListItemText primary="Research Projects" />
                </ListItem>
                <ListItem button component={Link} to="/notes">
                    <ListItemText primary="Notes" />
                </ListItem>
                <ListItem button component={Link} to="/analysis">
                    <ListItemText primary="Analysis" />
                </ListItem>
                <ListItem button component={Link} to="/writing-assistance">
                    <ListItemText primary="Writing Assistance" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Navbar;
