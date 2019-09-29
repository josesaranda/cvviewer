import React, { Component } from 'react';
import './Aside.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

type AsideProps = {};

type AsideState = {};

class Aside extends Component<AsideProps, AsideState> {

    render(){
        return (
            <div className="Aside">
                <AppBar position="static">
                    <Toolbar>
                    <Typography variant="h6" noWrap>
                        Curriculum
                    </Typography>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        // aria-controls={menuId}
                        // aria-haspopup="true"
                        // onClick={handleProfileMenuOpen}
                        color="inherit"
                        >
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        // aria-controls={menuId}
                        // aria-haspopup="true"
                        // onClick={handleProfileMenuOpen}
                        color="inherit"
                        >
                        <ArrowForwardIcon />
                    </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export { Aside };