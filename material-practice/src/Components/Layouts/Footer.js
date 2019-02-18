import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

const Footer = props => {
    return (
        <Paper>
            <Tabs
                value={0}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Item 1"/>
                <Tab label="Item 2"/>
                <Tab label="Item 3"/>
            </Tabs>
        </Paper>
    );
}

export default Footer;