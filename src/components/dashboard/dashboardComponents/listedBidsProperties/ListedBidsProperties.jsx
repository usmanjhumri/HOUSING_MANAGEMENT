
import {
    Button,
    Checkbox,
    Container,
    CssBaseline,
    Divider,
    Grid,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import IntroImage from "./assets/intro.jpg";
import selfie from "./assets/selfie.jpg";
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./form.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { actorRefresher, allPropertiesLoader, postNewProperty } from '../../../../RTK/Reducers/Reducers';
import Swal from "sweetalert2";
import { ErrorText } from "../../../helper/ErrorTestDisplayer";
import { fileUploader } from "../../../helper/uploader";
import { useNavigate } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';


const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})





const SectionHeading = ({ headingText }) => {
    return (
        <Box sx={{ background: "#2C3345", padding: "2% 5%", color: "#33CC33", borderRadius: '20px' }} mt={5}>
            <Typography fontSize={{ xs: "1.5em", color: '#33CC33' }}>{headingText}</Typography>
        </Box>
    );
};




export default (params) => {
    const { currentUserAllListedPropties, currentUserIsSeller, currentUser, currentUserIsActive } = useSelector(state => state.mainReducer);
    // console.log('currentUserAllListedPropties', currentUserIsSeller, currentUser);
    const navigate = useNavigate();

    if (!currentUserIsActive) { navigate('/'); }
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const dispatch = useDispatch();

    const [propertyType, setPropertyType] = React.useState('');
    const [paymentType, setPaymentType] = React.useState('');
    const [quistPakage, setQuistPakage] = React.useState('none');



    const {
        _id,
        actorBio,
        actorDP,
        actorFirstName,
        actorLastName,
        actorLocation,
        actorLoginId,
        actorLoginPassword,
        actorMail,
        actorPhone,
        actorRole, } = currentUser

    // main dataExtracter function
    const dataExtracter = async (data) => {
        if (currentUserIsSeller && currentUserIsActive) {
            dispatch(postNewProperty({
                ownerDP: actorDP,
                ownerMongoId: _id,
                ownerName: `${actorFirstName} ${actorLastName}`,
                actorMail: actorMail,
                actorPhone: actorPhone,


                propertyTitle: data.propertyTitle,
                propertyDescription: data.propertyDescription,
                propertyPrice: data.propertyPrice,
                propertyType: propertyType,
                propertyInstallmentsPackage: quistPakage,
                propertyBedrooms: data.propertyBedrooms,
                propertyBathrooms: data.propertyBathrooms,
                propertyArea: data.propertyArea,


                propertyAddress: `${data.StreetAddressLine1} ${data.StreetAddressLine2}`,
                propertyCity: data.city,
                propertyState: data.StateProvince,
                propertyZip: data.zipCode,
                propertyCountry: 'Pakistan',


                propertyLat: '40.7128',
                propertyLng: '-74.0060',
                propertyPayment: paymentType,
                propertyPaymentMethod: 'Stripe',
                propertySold: false,
                propertyNewOwner: {},
                propertyPhotos: [await fileUploader(data.propertyPicture1[0], new Date().getTime()),
                await fileUploader(data.propertyPicture2[0], new Date().getTime()),
                await fileUploader(data.propertyPicture3[0], new Date().getTime()),
                ],
                propertyAmenities: [
                    'Wifi',
                    'Cable TV',
                    'Air Conditioning',
                    'Kitchen',
                    'Heating',
                    'Washer',
                    'Dryer',
                    'Breakfast',
                    'Laptop Friendly Workspace',
                    'Smoking Allowed',
                    'Pets Allowed',
                    'Doorman',
                ],
                propertyReviews: [],
                propertyBids: [],
            })
            )
            dispatch(actorRefresher({ actorMongoId: _id, actorRole: actorRole, }))
            // dispatch(allPropertiesLoader())
        } else {
            Toast.fire({
                icon: 'error',
                title: 'You have already applied for KYC'
            })
        }

    };
    return (
        <Box>
            <Box
                margin="auto"
                component="form"
                id='listNewProperty'
                onSubmit={handleSubmit(dataExtracter)}
                sx={{ background: "white", color: '#1E1E1E' }}

            >
                {/* HeadingBox */}
                <Box sx={{ color: "#2C3345", padding: "3% 5% 0% 5%" }}>
                    <Typography fontSize={{ xs: "40px", fontWeight: "bold", color: '#33CC33' }}>
                        List New Property
                    </Typography>
                </Box>
                {/* Identity Details */}
                <SectionHeading headingText={"A. Basic Information"} />
                {/* fields */}
                <Container>
                    <Grid container alignItems="flex-end" spacing={3} mt={5}>
                        {/* propertyTitle */}
                        <Grid item xs={12}  >
                            <Typography mb={2}>1. Enter A Title</Typography>
                            <TextField
                                multiline
                                rows={2}
                                fullWidth
                                sx={{
                                    width: "97%",
                                    "& .MuiOutlinedInput-notchedOutline legend": { display: "none", },
                                    "& .MuiOutlinedInput-root input": { width: '100%', "&:focus": { outline: 'none' } }
                                }}
                                name="propertyTitle"
                                helperText="Property Title (5 - 50 characters)"
                                {...register("propertyTitle", { required: true, minLength: 3, maxLength: 50 })}
                                error={errors.propertyTitle}
                            />
                            {errors.propertyTitle && <>{errors.propertyTitle.type === 'minLength' ? ErrorText("Minimum Length 3 characters!") : ErrorText("Property Title is Required!")}</>}
                        </Grid>





                        {/* property Description */}
                        <Grid item xs={12}  >
                            <Typography mb={2}>2. Enter Description</Typography>
                            <TextField
                                fullWidth
                                multiline
                                rows={5}
                                sx={{
                                    width: "97%",
                                    "& .MuiOutlinedInput-notchedOutline legend": { display: "none", },
                                    "& .MuiOutlinedInput-root input": { width: '100%', "&:focus": { outline: 'none' } }
                                }}
                                name="propertyDescription"
                                helperText="Property Description (50 - 500 characters)"
                                {...register("propertyDescription", { required: true, minLength: 50, maxLength: 5000 })}
                                error={errors.propertyDescription}
                            />
                            {errors.propertyDescription && <>{errors.propertyDescription.type === 'minLength' ? ErrorText("Minimum Length 3 characters!") : ErrorText("Property Description is Required!")}</>}
                        </Grid>




                        {/* property property Price */}
                        <Grid item xs={12} md={6} >
                            <Typography mb={2}>4. Enter Price</Typography>
                            <TextField
                                fullWidth
                                sx={{
                                    width: "97%",
                                    "& .MuiOutlinedInput-notchedOutline legend": { display: "none", },
                                    "& .MuiOutlinedInput-root input": { width: '100%', "&:focus": { outline: 'none' } }
                                }}
                                type="number"
                                name="propertyPrice"
                                helperText="Price (PKR)"
                                {...register("propertyPrice", { required: true, minLength: 3 })}
                                error={errors.propertyPrice}
                            />
                            {errors.propertyPrice && <>{errors.propertyPrice.type === 'minLength' ? ErrorText("Minimum Length 3 Digits!") : ErrorText("Field is Required!")}</>}
                        </Grid>





                        {/* property propertyType */}
                        <Grid item xs={12} md={6} >
                            <Typography mb={2}>5. Select Type</Typography>

                            <FormControl fullWidth>
                                <InputLabel id="propertyType">Property Type</InputLabel>
                                <Select
                                    {...register("propertyType", { required: true })}
                                    labelId="propertyType"
                                    id="propertyType"
                                    value={propertyType}
                                    label="Property Type"
                                    error={errors.propertyType}
                                    onChange={(event) => { setPropertyType(event.target.value) }}
                                >
                                    <MenuItem value=""> <em>None</em> </MenuItem>
                                    <MenuItem value={'House'}>House</MenuItem>
                                    <MenuItem value={'Flat'}>Flat</MenuItem>
                                    <MenuItem value={'Apartment'}>Apartment</MenuItem>
                                </Select>
                                <FormHelperText>Enter Proprty Type</FormHelperText>
                            </FormControl>
                        </Grid>

                        {/* property propertyBedrooms */}
                        <Grid item xs={12} md={6} >
                            <Typography mb={2}>6. Enter Amount of Bed-Rooms</Typography>
                            <TextField
                                fullWidth
                                sx={{
                                    width: "97%",
                                    "& .MuiOutlinedInput-notchedOutline legend": { display: "none", },
                                    "& .MuiOutlinedInput-root input": { width: '100%', "&:focus": { outline: 'none' } }
                                }}
                                placeholder="Enter Amount of Bed-Rooms"
                                name="propertyBedrooms"
                                helperText="Bed-Rooms"
                                {...register("propertyBedrooms", { required: true, minLength: 1 })}
                                error={errors.propertyBedrooms}
                            />
                            {errors.propertyBedrooms && <>{errors.propertyBedrooms.type === 'minLength' ? ErrorText("Minimum Length 3 characters!") : ErrorText("Field is Required!")}</>}
                        </Grid>



                        {/* property paymentType */}
                        <Grid item xs={12} md={6} >
                            <Typography mb={2}>7. Select Payment Type</Typography>

                            <FormControl fullWidth>
                                <InputLabel id="paymentType">Payment Type</InputLabel>
                                <Select
                                    {...register("paymentType", { required: true })}
                                    labelId="paymentType"
                                    id="paymentType"
                                    value={paymentType}
                                    label="Payment Type"
                                    error={errors.paymentType}
                                    onChange={(event) => { setPaymentType(event.target.value) }}
                                >
                                    <MenuItem value=""> <em>None</em> </MenuItem>
                                    <MenuItem value={'fullPayment'}>Full Payment</MenuItem>
                                    <MenuItem value={'quist'}>Quist</MenuItem>
                                </Select>
                                <FormHelperText>Enter Proprty Type</FormHelperText>
                            </FormControl>
                        </Grid>
                        {/* property Qist Types */}
                        {
                            paymentType === 'quist' ? (< Grid item xs={12} md={6} >
                                <Typography mb={2}>Select Qist Pakages</Typography>

                                <FormControl fullWidth>
                                    <InputLabel id="quistPakage">Payment Type</InputLabel>
                                    <Select
                                        {...register("quistPakage", { required: true })}
                                        labelId="quistPakage"
                                        id="quistPakage"
                                        value={quistPakage}
                                        label="Payment Type"
                                        error={errors.quistPakage}
                                        onChange={(event) => { setQuistPakage(event.target.value) }}
                                    >
                                        <MenuItem value=""> <em>None</em> </MenuItem>
                                        <MenuItem value={'monnthly'}>1 Month</MenuItem>
                                        <MenuItem value={'sixMonth'}>6 Month</MenuItem>
                                        <MenuItem value={'annual'}>Annual</MenuItem>
                                    </Select>
                                    <FormHelperText>Enter Proprty Type</FormHelperText>
                                </FormControl>
                            </Grid>
                            ) : null
                        }



                        {/* property propertyBathrooms */}
                        <Grid item xs={12} md={6} >
                            <Typography mb={2}>7. Enter Number of Bathrooms</Typography>
                            <TextField
                                fullWidth
                                sx={{
                                    width: "97%",
                                    "& .MuiOutlinedInput-notchedOutline legend": { display: "none", },
                                    "& .MuiOutlinedInput-root input": { width: '100%', "&:focus": { outline: 'none' } }
                                }}
                                name="propertyBathrooms"
                                helperText="Number of Bathrooms"
                                placeholder="Enter Number of Bathrooms"
                                {...register("propertyBathrooms", { required: true, minLength: 1 })}
                                error={errors.propertyBathrooms}
                            />
                            {errors.propertyBathrooms && <>{errors.propertyBathrooms.type === 'minLength' ? ErrorText("Minimum Length 3 characters!") : ErrorText("Field is Required!")}</>}
                        </Grid>





                        {/* property propertyArea */}
                        <Grid item xs={12} md={6} >
                            <Typography mb={2}>8. Enter Area</Typography>
                            <TextField
                                fullWidth
                                type={'number'}
                                sx={{
                                    width: "97%",
                                    "& .MuiOutlinedInput-notchedOutline legend": { display: "none", },
                                    "& .MuiOutlinedInput-root input": { width: '100%', "&:focus": { outline: 'none' } }
                                }}
                                name="propertyArea"
                                helperText="Property Area"
                                {...register("propertyArea", { required: true, minLength: 3 })}
                                error={errors.propertyArea}
                            />
                            {errors.propertyArea && <>{errors.propertyArea.type === 'minLength' ? ErrorText("Minimum Length 3 characters!") : ErrorText("Field is Required!")}</>}
                        </Grid>








                        {/* property Pictures */}

                        <Grid item xs={12} mt={4}>
                            <Typography mb={2}>8. Upload Pictures of your Property</Typography>
                            <TextField
                                {...register('propertyPicture1', { required: true })}
                                type={'file'}
                                inputProps={{
                                    accept: 'image/*',
                                    multiple: true,
                                }}
                                mb={1}
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-notchedOutline legend": { display: "none", },
                                    "& .MuiOutlinedInput-root input": { width: '100%', "&:focus": { outline: 'none' } }
                                }}
                                accept="image/*"
                                name='propertyPicture1'
                                error={errors.propertyPicture1}
                            />
                            {errors.propertyPicture1 && ErrorText("Field is Required!")}

                            <TextField
                                {...register('propertyPicture2', { required: true })}
                                type={'file'}
                                inputProps={{
                                    accept: 'image/*',
                                    multiple: true,
                                }}
                                mb={1}
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-notchedOutline legend": { display: "none", },
                                    "& .MuiOutlinedInput-root input": { width: '100%', "&:focus": { outline: 'none' } }
                                }}
                                accept="image/*"
                                name='propertyPicture2'
                                error={errors.propertyPicture2}
                            />
                            {errors.propertyPicture2 && ErrorText("Field is Required!")}



                            <TextField
                                {...register('propertyPicture3', { required: true })}
                                type={'file'}
                                inputProps={{
                                    accept: 'image/*',
                                    multiple: true,
                                }}
                                mb={1}
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-notchedOutline legend": { display: "none", },
                                    "& .MuiOutlinedInput-root input": { width: '100%', "&:focus": { outline: 'none' } }
                                }}
                                accept="image/*"
                                name='propertyPicture3'
                                error={errors.propertyPicture3}
                            />
                            {errors.propertyPicture3 && ErrorText("Field is Required!")}


                        </Grid>





















                        {/* B. Address Details */}



                        <Grid item xs={12}>
                            <SectionHeading headingText={"B. Address Details"} />
                        </Grid>
                        <Grid item xs={12} mt={8}>
                            <Typography mb={2}>1. Address for Correspondence</Typography>
                            <TextField
                                fullWidth
                                name="StreetAddressLine1"
                                sx={{
                                    "& .MuiOutlinedInput-notchedOutline legend": { display: "none", },
                                    "& .MuiOutlinedInput-root input": { width: '100%', "&:focus": { outline: 'none' } }
                                }}
                                helperText="Street Address Line 1"
                                {...register("StreetAddressLine1", { required: true, minLength: 3 })}
                                error={errors.StreetAddressLine1}
                            />
                            {errors.StreetAddressLine1 && <>{errors.StreetAddressLine1.type === 'minLength' ? ErrorText("Minimum Length 3 characters!") : ErrorText("Field is Required!")}</>}
                        </Grid>
                        <Grid item xs={12} mt={3}>
                            <TextField
                                fullWidth
                                name="StreetAddressLine2"
                                sx={{
                                    "& .MuiOutlinedInput-notchedOutline legend": { display: "none", },
                                    "& .MuiOutlinedInput-root input": { width: '100%', "&:focus": { outline: 'none' } }
                                }}
                                helperText="Street Address Line 2"
                                {...register("StreetAddressLine2", { required: true, minLength: 3 })}
                                error={errors.StreetAddressLine2}
                            />
                            {errors.StreetAddressLine2 && <>{errors.StreetAddressLine2.type === 'minLength' ? ErrorText("Minimum Length 3 characters!") : ErrorText("Field is Required!")}</>}
                        </Grid>
                        {/* city */}
                        <Grid item xs={12} md={6} mt={3}>
                            <TextField
                                fullWidth
                                sx={{
                                    width: "97%",
                                    "& .MuiOutlinedInput-notchedOutline legend": { display: "none", },
                                    "& .MuiOutlinedInput-root input": { width: '100%', "&:focus": { outline: 'none' } }
                                }}
                                name="city"
                                helperText="City"
                                {...register("city", { required: true, minLength: 3 })}
                                error={errors.city}
                            />
                            {errors.city && <>{errors.city.type === 'minLength' ? ErrorText("Minimum Length 3 characters!") : ErrorText("Field is Required!")}</>}
                        </Grid>
                        {/*  */}
                        <Grid item xs={12} md={6} mt={3}>
                            <TextField
                                fullWidth
                                sx={{
                                    width: "97%", marginLeft: "2%",
                                    "& .MuiOutlinedInput-notchedOutline legend": { display: "none", },
                                    "& .MuiOutlinedInput-root input": { width: '100%', "&:focus": { outline: 'none' } }
                                }}
                                name="StateProvince"
                                helperText="State / Province"
                                {...register("StateProvince", { required: true, minLength: 3 })}
                                error={errors.StateProvince}
                            />
                            {errors.StateProvince && <>{errors.StateProvince.type === 'minLength' ? ErrorText("Minimum Length 3 characters!") : ErrorText("Field is Required!")}</>}
                        </Grid>

                        {/* Postal / Zip Code */}
                        <Grid item xs={12} mt={3}>
                            <TextField
                                fullWidth
                                sx={{
                                    width: "97%",
                                    "& .MuiOutlinedInput-notchedOutline legend": { display: "none", },
                                    "& .MuiOutlinedInput-root input": { width: '100%', "&:focus": { outline: 'none' } }
                                }}
                                name="zipCode"
                                helperText="Postal / Zip Code"
                                {...register("zipCode", { required: true, minLength: 3 })}
                                error={errors.zipCode}
                            />
                            {errors.zipCode && <>{errors.zipCode.type === 'minLength' ? ErrorText("Minimum Length 3 characters!") : ErrorText("Field is Required!")}</>}
                        </Grid>
                    </Grid>
                </Container>
                <Box textAlign="center" mb={2} pb={6}>
                    <Divider sx={{ margin: '50px 0px' }} />
                    <Button
                        type="submit"
                        variant="filled"
                        sx={{
                            background: "#2C3345",
                            "&:hover": { background: "#2C3345" },
                            padding: "20px 90px",
                            color: "#33CC33",
                        }}
                    >
                        Submit
                    </Button>
                </Box>
                <Box>
                </Box>
            </Box>
        </Box >
    )
};
