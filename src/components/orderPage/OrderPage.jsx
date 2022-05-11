import { Box } from "@mui/system";
import { Button, Chip, Container, Grid, Rating, Stack, TextField, Typography } from '@mui/material';
import { Link, useNavigate, useParams } from "react-router-dom";
import OrderStr from "./order.png";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from "react-redux";
import { OrderPageResponsiveCarouselDisplayer } from "../helper/OrderPageCarosual";
import PhoneIcon from '@mui/icons-material/Phone';
import { actorRefresher, bidOnProperty } from "../../RTK/Reducers/Reducers";
import { useForm } from "react-hook-form";
import { ErrorText } from "../helper/ErrorTestDisplayer";




export default () => {
    window.scrollTo(0, 0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [value, setValue] = React.useState(2);
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { clickedProperty, currentUserAllListedPropties, currentUserIsBuyer, currentUser, currentUserIsActive } = useSelector(state => state.mainReducer);
    const { owner, property } = clickedProperty;
    const { id } = owner;
    const {
        propertyTitle,
        propertyDescription,
        propertyPrice,
        propertyType,
        propertyBedrooms,
        propertyBathrooms,
        propertyArea,
        propertyAddress,
        propertyCity,
        propertyState,
        propertyZip,
        propertyCountry,
        propertyLat,
        propertyLng,
        propertySold,
        propertyNewOwner,
        propertyPhotos,
        propertyAmenities,
        propertyReviews,
        propertyPayment,
        propertyPaymentMethod,
        propertyBids,
        // owner
        ownerMongoId,
        ownerName,
        actorMail,
        actorPhone,
        propertyInstallmentsPackage,
        // propertyFeatured,
    } = property;


    const dataGetter = (data) => {
        console.log(data);
        // dispatch(bidOnProperty({ bidderDP, bidderMongoId, bidderName, bidderMail, bidderPhone, bidPrice }))
        // dispatch(actorRefresher({
        //     actorMongoId : currentUser._id,
        //     actorRole : currentUser.actorRole,
        // }));
    }


    return (
        <Box sx={{ paddingBottom: 10 }}>
            {/* <img src={OrderStr} alt="Order" style={{ width: '100%', height: '100%' }} /> */}
            <Container>
                <Grid container spacing={3}>

                    <Grid item xs={12}>
                        <Typography variant="h5" mt={4} gutterBottom>  <center>{propertyTitle}</center></Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Box sx={{
                            width: { xs: '98%', md: '100%' },
                            margin: 'auto',
                        }}>
                            <OrderPageResponsiveCarouselDisplayer images={propertyPhotos} />
                        </Box>
                    </Grid>

                    <Grid item xs={12} textAlign='center'>
                        <Typography variant="h5" gutterBottom>
                            Important Details
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header"
                            > <Typography> Description </Typography> </AccordionSummary>
                            <AccordionDetails><Typography>{propertyDescription}</Typography> </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header"
                            > <Typography> Price and Payment </Typography> </AccordionSummary>
                            <AccordionDetails>
                                <Typography><b>Price: </b>{propertyPrice}</Typography>
                                <Typography><b>Payment : </b>{propertyPayment}</Typography>
                                <Typography><b>Payment Gateway: </b>{propertyPaymentMethod}</Typography>
                                {
                                    propertyInstallmentsPackage && <Typography><b>Installments Package: </b>{propertyInstallmentsPackage}</Typography>
                                }
                                <Typography><b>Payment Gateway: </b>{propertyPaymentMethod}</Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header"
                            > <Typography> Reviews </Typography> </AccordionSummary>
                            <AccordionDetails>
                                {
                                    propertyReviews.map((item, index) => <Box key={index} sx={{ margin: '10px 0px' }}>
                                        <Accordion>
                                            <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header"
                                            >
                                                <Box width='90%' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <img src={item.reviewAuthorDP} alt="user" width='30px' height='30px' />
                                                    <Typography>{item.reviewAuthor}</Typography>
                                                    <Rating name="read-only" value={item.reviewAuthorRating} readOnly />
                                                </Box>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>{item.reviewAuthorReview}</Typography>
                                                <Typography sx={{ textAlign: 'right' }}><span>{item.reviewAuthorDate}</span></Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Box>)
                                }
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header"
                            > <Typography> Amenities </Typography> </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={1}>
                                    {
                                        propertyAmenities.map((item, index) => <Grid item key={index}>
                                            <Chip label={item} />
                                        </Grid>)
                                    }
                                </Grid>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header"
                            > <Typography> Useful Details </Typography> </AccordionSummary>
                            <AccordionDetails>
                                <Typography><b>propertyType: </b>{propertyType}</Typography>
                                <Typography><b>propertyBedrooms: </b>{propertyBedrooms}</Typography>
                                <Typography><b>propertyBathrooms: </b>{propertyBathrooms}</Typography>
                                <Typography><b>propertyArea: </b>{propertyArea}</Typography>
                                <Typography><b>propertyAddress: </b>{propertyAddress}</Typography>
                                <Typography><b>propertyCity: </b>{propertyCity}</Typography>
                                <Typography><b>propertyState: </b>{propertyState}</Typography>
                                <Typography><b>propertyZip: </b>{propertyZip}</Typography>
                                <Typography><b>propertyCountry: </b>{propertyCountry}</Typography>
                                <Typography><b>propertyLat: </b>{propertyLat}</Typography>
                                <Typography><b>propertyLng: </b>{propertyLng}</Typography>
                            </AccordionDetails>
                        </Accordion>

                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom>
                            Contact Owner
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header"
                            > <Typography> Owner Details </Typography> </AccordionSummary>
                            <AccordionDetails>
                                <Typography><b>Name: </b>{ownerName}</Typography>
                                <Typography><b>Mail: </b>
                                    <a href={`mailto:${actorMail}`}>{actorMail}</a>
                                </Typography>
                                <Typography><b>Phone: </b> {actorPhone}</Typography>
                                <Typography textAlign={'right'}>
                                    <Button
                                        componen='a'
                                        href={`https://wa.me/${actorPhone}`}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        sx={{ backgroundColor: '#0DC143', color: 'white' }}
                                    >
                                        <PhoneIcon sx={{ fontSize: '13px' }} />
                                    </Button>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom>
                            Bid on this Property
                        </Typography>
                    </Grid>
                    {
                        currentUserIsBuyer && currentUserIsActive ? <>
                            <Grid item xs={12}>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header"
                                    > <Typography>  Bid Form </Typography> </AccordionSummary>
                                    <AccordionDetails>
                                        <Box component={'form'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }} onSubmit={handleSubmit(dataGetter)}>
                                            <TextField
                                                id="standard-basic"
                                                label="Bid Amount"
                                                name="bidAmount"
                                                type={'number'}
                                                sx={{ margin: '10px 0px' }}
                                                {...register("bidAmount", { required: true, minLength: 3 })}
                                                error={errors.bidAmount}
                                            />
                                            {errors.bidAmount && <>{errors.bidAmount.type === 'minLength' ? ErrorText("Minimum Length 3 characters!") : ErrorText("Field is Required!")}</>}
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

                                        </Box>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                        </>
                            :
                            <Grid item xs={12}>
                                <Link to={'/login'}>
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
                                        Login to Bid
                                    </Button>
                                </Link>
                            </Grid>

                    }












                </Grid>
            </Container>
        </Box>
    )
}