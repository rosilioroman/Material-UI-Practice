import React from 'react';

//using named imports for Material UI components
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Header = props => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="headline" color="inherit">
                    Exercise Database
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;