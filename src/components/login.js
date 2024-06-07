import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Login = () => {
    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" };
    const avatarStyle = { backgroundColor: 'green' };
    const btnStyle = { margin: '8px 0' };
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
       
        alert('Inicio de sesión exitoso!');
    };

    return (
        <Grid container justifyContent="center">
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <LockOutlinedIcon />
                    </Avatar>
                </Grid>
                <form onSubmit={handleLogin}>
                    <TextField label='Correo Electrónico' placeholder='Introduce Correo Electrónico' fullWidth required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <TextField label='Contraseña' placeholder='Introduce contraseña' type='password' fullWidth required value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Button type='submit' color="primary" variant="contained" style={btnStyle} fullWidth>Iniciar Sesión</Button>
                </form>
                <Typography>
                    <Link href="#" onClick={() => navigate('/')}>
                        ¿No tienes cuenta? Regístrate
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    );
}

export default Login;

