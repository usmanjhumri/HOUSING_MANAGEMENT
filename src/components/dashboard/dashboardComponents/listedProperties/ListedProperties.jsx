import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from "@mui/material";

export default () => {
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const dispatch = useDispatch();
    const { currentUserAllListedPropties } = useSelector(state => state.mainReducer)
    console.log('currentUserAllListedPropties', currentUserAllListedPropties);
    return (
        <Box>
            <Box my={3}
                textAlign="center"
                color="#33CC33"
            ><h4> All Listed Propties</h4></Box>


            <Box>
                {
                    currentUserAllListedPropties.map((property, index) => {
                        const { ownerDP, ownerName, propertyArea, propertyCity, propertyDescription, propertyPayment, propertyPhotos, propertyPrice, propertyTitle, propertyType, propertyBids } = property;
                        console.log('propertybids', property);
                        return (
                            <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} >

                                    <Typography color='text' variant='button'>
                                        {index + 1} :  property Title: {propertyTitle}
                                    </Typography>

                                    {/* <Typography color='text' variant='button'>I am an accordion</Typography > */}
                                </AccordionSummary>
                                <AccordionDetails>
                                    {
                                        propertyBids.length > 0 ? <table style={{
                                            width: '100%',
                                            minWidth: '600px',
                                            overflowY: 'scroll'

                                        }}>
                                            <tr>
                                                <td style={{ width: '20%' }}>
                                                    <Typography color='text' fontWeight='bold' variant='button'>
                                                        Applied By
                                                    </Typography>
                                                </td>
                                                <td style={{ width: '20%' }}>
                                                    <Typography color='text' fontWeight='bold' variant='button'>
                                                        Budget
                                                    </Typography>
                                                </td>
                                                {/* <td style={{ width: '20%' }}>
                                                    <Typography color='text' fontWeight='bold' variant='button'>
                                                        Time
                                                    </Typography>
                                                </td> */}
                                                {/* <td style={{ width: '20%' }}>
                                                    <Typography color='text' fontWeight='bold' variant='button'>
                                                        Profile
                                                    </Typography>
                                                </td> */}
                                                <td style={{ width: '20%' }}>
                                                    <Typography color='text' fontWeight='bold' variant='button'>
                                                        Action
                                                    </Typography>
                                                </td>
                                            </tr>
                                            {
                                                propertyBids.map((freelancer, index) => (
                                                    <tr key={index}>
                                                        <td> <Typography color='text' variant='button' textTransform="uppercase"> {freelancer.freelancerFullName}  </Typography> </td>
                                                        <td> <Typography color='text' variant='button'> {freelancer.freelancerBidAmount}  </Typography> </td>
                                                        <td> <Typography color='text' variant='button'> {freelancer.freelancerBidDuration}  </Typography> </td>
                                                        <td> <Typography color='text' variant='button'>
                                                            <Button sx={{ color: 'white', fontSize: '12px', padding: '0px' }}>
                                                                Profile
                                                            </Button>
                                                        </Typography> </td>
                                                        <td> <Typography color='text' variant='button'>
                                                            <Button sx={{ color: 'white', fontSize: '12px', padding: '0px' }}
                                                                onClick={() => {
                                                                    console.log('accepted', freelancer.buyerMonogoId);
                                                                    // dispatch(jobAssigner({
                                                                    //     buyerId: property.buyerActorMongoId,
                                                                    //     freelancer: {
                                                                    //         freelancerId: freelancer.freelancerID,
                                                                    //         freelancerFullName: freelancer. //         freelancerBidAmount: freelancer.freelancerFullName,
                                                                //    freelancerBidAmount,
                                                                    //         freelancerBidDuration: freelancer.freelancerBidDuration,
                                                                    //     },
                                                                    //     property: {
                                                                    //         actorMongoId: property.actorMongoId,
                                                                    //         awardedToFreelacerStatus: true,
                                                                    //         jobBudget: property.jobBudget,
                                                                    //         jobComment: property.jobComment,
                                                                    //         jobDescription: property.jobDescription,
                                                                    //         jobDuration: property.jobDuration,
                                                                    //         jobId: property.jobId,
                                                                    //         jobPostedBy: property.jobPostedBy,
                                                                    //         jobPostedTime: property.jobPostedTime,
                                                                    //         jobSkills: property.jobSkills,
                                                                    //         jobStatus: property.jobStatus,
                                                                    //         jobTitle: property.jobTitle,
                                                                    //         ratingByFreelacer: property.ratingByFreelacer,
                                                                    //     },
                                                                    // }))
                                                                }}
                                                            >
                                                                Accept
                                                            </Button>
                                                        </Typography> </td>
                                                    </tr>
                                                ))
                                            }
                                        </table> : <center><Typography color='text' variant='button'>No Bids</Typography></center>
                                    }
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }
            </Box>
        </Box>
    )
};
