import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from './logoNew.png';
import GIF2 from './GIF2.gif';
import { actorLogin } from '../../RTK/Reducers/Reducers';

export default () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { status, currentUserIsActive } = useSelector(state => state.mainReducer);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if (data.get('email') && data.get('password')) {
            dispatch(actorLogin({
                email: data.get('email'),
                password: data.get('password')
            }))
        }
    }; // end handleSubmit
    if (currentUserIsActive) {
        navigate('/dashboard/home');
    }

    return (
        <Grid container component="main" sx={{ height: '100vh', }} pb={4}>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    // backgroundImage: 'url(https://source.unsplash.com/random)',
                    backgroundImage: `url(${GIF2})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> */}
                    <Box component='img' src={logo} alt='logo' maxWidth='150px' margin='auto' />
                    {/* </Avatar> */}

                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container justifyContent={'space-between'}>
                        <Grid item >
                                <Link to="/forgot" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item >
                                <Link to="/signup" variant="body2">
                                    Do not have Account !
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}