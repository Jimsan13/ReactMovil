import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Grid, Paper, Avatar, Typography, TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" };
    const avatarStyle = { backgroundColor: 'green' };
    const marginTop = { marginTop: 5 };
    const marginBottom = { marginBottom: 10 };

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        navigate('/login');
    };

    return (
        <Grid container justifyContent="center">
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <LockOutlinedIcon />
                    </Avatar>
                </Grid>
                <form onSubmit={handleRegister}>
                    <TextField fullWidth label='Nombre completo' placeholder="Ingrese su nombre" required />
                    <TextField fullWidth label='Correo electrónico' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <TextField fullWidth label='Contraseña' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Soy</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1">
                            <FormControlLabel value="Dueño" control={<Radio />} label="Dueño" />
                            <FormControlLabel value="Comprador" control={<Radio />} label="Comprador" />
                        </RadioGroup>
                    </FormControl>
                    <div style={marginBottom}> 
                        <Typography variant="caption">Al registrarte, aceptas nuestra política de privacidad.</Typography>
                        <Button type='submit' variant="contained" color='primary'>Registrarse</Button>
                    </div>
                </form>
            </Paper>
        </Grid>
    );
}

export default Signup;
