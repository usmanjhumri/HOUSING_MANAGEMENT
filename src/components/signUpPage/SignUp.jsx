import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, useNavigate } from 'react-router-dom';
import { FormControl, InputAdornment, InputLabel, MenuItem, Select } from '@mui/material';
import { ExpandCircleDown } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { ErrorText } from '../helper/ErrorTestDisplayer';
import { useDispatch, useSelector } from 'react-redux';
import { newActorRegistrar } from '../../RTK/Reducers/Reducers';
import { fileUploader } from '../helper/uploader';

export default function SignUp() {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [actorRole, setactorRole] = React.useState('');
    const [imgPreview, setimgPreview] = React.useState('');
    const { registration } = useSelector(state => state.mainReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const ImagePrevierFunction = (e) => {
        const reader = new FileReader();
        reader.onload = (e) => setimgPreview(e.target.result);
        reader.readAsDataURL(e.target.files[0]);
    }
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const registrar = async (data) => {
        if (data.email && data.phoneNumber && data.loginEail && data.password && data.firstName && data.lastName && data.bio && data.actorRole) {
            dispatch(newActorRegistrar({
                actorMail: data.email,
                actorPhone: data.phoneNumber,
                actorLoginId: data.loginEail,
                actorLoginPassword: data.password,
                actorFirstName: data.firstName,
                actorLastName: data.lastName,
                actorBio: data.bio,
                actorRole: data.actorRole,
                actorDP: await fileUploader(data.dp[0], new Date().getTime()),
                actorLocation: 'dummy Location',
                likedProperties: [],
                bids: [],
            }));
        };
    };
    if (registration) {
        document.getElementById('signUpForm').reset();
        navigate('/login');
    }

    return (
        <Box>
            <Container component="main" maxWidth="sm">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h4">
                        Sign up
                    </Typography>
                    <Box component="form" id='signUpForm' noValidate onSubmit={handleSubmit(registrar)} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    error={errors.firstName}
                                    {...register('firstName', { required: true, minLength: 3 })}
                                />
                                {errors.firstName && <>{errors.firstName.type === 'minLength' ? ErrorText("Minimum Length 3 characters!") : ErrorText("First Name is Required!")}</>}
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    error={errors.lastName}
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    {...register('lastName', { required: true, minLength: 3 })}
                                />
                                {errors.lastName && <>{errors.lastName.type === 'minLength' ? ErrorText("Minimum Length 3 characters!") : ErrorText("Last Name is Required!")}</>}
                            </Grid>
                            {/* image filed */}
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    {...register('dp', { required: true })}
                                    error={errors.dp}
                                    fullWidth
                                    name="dp"
                                    type={'file'}
                                    accept="image/*"
                                    onChange={ImagePrevierFunction}
                                />
                                {errors.dp && <>{errors.dp.type === 'minLength' ? ErrorText("Minimum Length 3 characters!") : ErrorText("DP is Required!")}</>}
                                {
                                    imgPreview && <>
                                        <Box sx={{ textAlign: 'center', marginTop: '30px' }}>
                                            <img src={imgPreview} style={{ height: '200px', width: '200px' }} />
                                            <Typography variant="h6"> You have selected this image for DP</Typography>
                                        </Box>
                                    </>
                                }
                            </Grid>





                            {/* bio */}
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    error={errors.bio}
                                    multiline
                                    minRows={4}
                                    id="bio"
                                    label="Simple Introduction"
                                    name="bio"
                                    {...register('bio', { required: true, minLength: 10 })}
                                />
                                {errors.bio && <>{errors.bio.type === 'minLength' ? ErrorText("Minimum Length 3 characters!") : ErrorText("Introduction is Required!")}</>}
                            </Grid>








                            <Grid item xs={12}>
                                <FormControl error={errors.actorRole} fullWidth required>
                                    <InputLabel id="registration-role">
                                        Account Role
                                    </InputLabel>
                                    <Select
                                        fullWidth
                                        required
                                        {...register('actorRole', { required: true })}
                                        onChange={(e) => setactorRole(e.target.value)}
                                        error={errors.actorRole}
                                        labelId="registration-role"
                                        name="actorRole"
                                        value={actorRole}
                                        label="actorRole"
                                        displayEmpty
                                        sx={{ height: '44px' }}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <ExpandCircleDown />
                                            </InputAdornment>
                                        }
                                    >
                                        <MenuItem value={''}>  </MenuItem>
                                        <MenuItem value={'seller'}> Property Seller </MenuItem>
                                        <MenuItem value={'buyer'}> Property Buyer</MenuItem>
                                    </Select>
                                </FormControl> 
                            </Grid>


                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="phoneNumber"
                                    error={errors.phoneNumber}
                                    label="Phone Number - Whatsapp (92xxxxxxxxxx)"
                                    type="phoneNumber"
                                    id="phoneNumber"
                                    autoComplete="new-phoneNumber"
                                    {...register('phoneNumber', { required: true, pattern: /([0-9\s\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/ })}
                                />
                                {errors.email && <>{errors.email.type === 'pattern' ? ErrorText("Enter a valid pattern!") : ErrorText("Phone Number is Required!")}</>}
                            </Grid>



                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    error={errors.loginEail}
                                    id="loginEail"
                                    label="Login ID / Eail Address"
                                    name="loginEail"
                                    type="email"
                                    autoComplete="loginEail"
                                    {...register('loginEail', { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })}
                                />
                                {errors.loginEail && <>{errors.loginEail.type === 'pattern' ? ErrorText("Enter a valid pattern!") : ErrorText("Login ID / Email Address is Required!")}</>}
                            </Grid>


                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    error={errors.email}
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    {...register('email', { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })}
                                />
                                {errors.email && <>{errors.email.type === 'pattern' ? ErrorText("Enter a valid pattern!") : ErrorText("Email Address is Required!")}</>}
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    error={errors.password}
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    {...register('password', { required: true, minLength: 7 })}
                                />
                                {errors.password && <>{errors.password.type === 'minLength' ? ErrorText("Minimum Length 7 characters!") : ErrorText("Password is Required!")}</>}
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            variant="button"
                            sx={{
                                mt: 3, mb: 2, px: 10, py: 2,
                                color: '#FFFFFF',
                                clipPath: "polygon(21% 0, 94% 0, 100% 20%, 79% 100%, 6% 100%, 0 80%)",
                                background: " radial-gradient(241.67% 3206.67% at -4.58% -26.67%, #AD00FF 8.51%, #0029FF 90%)",
                                cursor: "pointer",
                            }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to='/login' variant="body2" style={{ color: '#1E1E1E', fontSize: '12px' }}>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}