import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; 

const Navbar = () => {
    return (
        <AppBar position="static" style={{ marginBottom: 20 }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <img src={logo} alt="Mapbox Logo" style={{ height: 30 }} /> 
                    Mapbox Campus
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/details">Details</Button>
                    <Button color="inherit" component={Link} to="/measures">Measures</Button>
                    <Button color="inherit" component={Link} to="/kpis">KPIS</Button>
                    <Button color="inherit" component={Link} to="/control">Control</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
