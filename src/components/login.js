import React from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Login = () => {
    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" };
    const avatarStyle = { backgroundColor: 'green' };
    const btnStyle = { margin: '8px 0' };


    return (
        <Grid container justify="center">
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter Username' fullWidth required />
                <TextField label='Password' placeholder='Enter Password' type='password' fullWidth required />
                <FormControlLabel
                    control={<Checkbox name="checkedB" color="primary" />}
                    label="Remember me"
                />
                <Button type='submit' color="primary" variant="contained" style={btnStyle} fullWidth>Sign In</Button>
                <Typography>
                    <Link href="#" >
                        Forgot password?
                    </Link>
                </Typography>
                <Typography> Do you have an account?
                    <Link href="#" >
                        Sign up?
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    );
}

export default Login;
