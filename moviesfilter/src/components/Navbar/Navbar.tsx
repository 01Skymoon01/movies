import React, {useEffect, useState} from "react";
import {AppBar, Toolbar, Avatar,Button, Typography} from "@material-ui/core";
import useStyles from "./styles";
import {Link, useHistory, useLocation } from "react-router-dom";
import movies from "../../images/movie.png";

const Navbar = () => {

    // For Style
    const classes = useStyles();


    // ****
    const location = useLocation();
    const history = useHistory();


    return(
        <AppBar className={classes.appBar} position={`static`} color={`inherit`}>
            <Typography className={classes.heading} variant={`h2`} align={`inherit`}  component={Link} to="/"> Movies</Typography>
        </AppBar>
    );
};

export default Navbar;