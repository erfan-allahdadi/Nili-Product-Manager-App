import React from 'react';

import { AppBar, Toolbar, Button, Typography } from '@mui/material';

const Header = () => {



    return (
        <>
            <AppBar position="static">
                <Toolbar >
                    <Typography variant='h6' >وب اپلیکیشن مدیریت محصولات نیلی استور</Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;