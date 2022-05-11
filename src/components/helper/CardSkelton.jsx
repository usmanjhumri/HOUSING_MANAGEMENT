import { Box } from "@mui/system";
import { Link, useParams } from "react-router-dom";
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Chip } from '@mui/material';
import { ClickedProperty } from "../../RTK/Reducers/Reducers";
import { useDispatch } from "react-redux";
import Sold from "./sold.png";
import New from "./new.png";
import './cardSkelton.css'
import { FlippingCard, FlippingCardFront, FlippingCardBack, UserCard, NewsHeaderCard } from "react-ui-cards";


export default ({ item }) => {
    const { ownerDP, ownerName, propertyArea, propertyCity, propertyDescription, propertyPayment, propertyPhotos, propertyPrice, propertyTitle, propertyType, } = item;
    const dispatch = useDispatch();



    return (
        <FlippingCard style={{ width: '95%', margin: 'auto', cursor: 'pointer', minHeight: '390px', position: 'relative', height: '100%' }} >
            {/* front */}
            <FlippingCardFront style={{ position: 'relative', minWidth: '100%', height: '100%', padding: '0px' }}>
                {/* <Chip label='new' /> */}
                <UserCard
                    style={{ margin: '0px', width: '100%' }}
                    header={propertyPhotos[0]}
                    avatar={ownerDP}
                    name={ownerName}
                    positionName={propertyType}
                    stats={[
                        { name: 'size', value: propertyArea },
                        { name: 'price', value: `Rs ${propertyPrice}` },
                        { name: 'city', value: propertyCity },
                        { name: 'Payment', value: propertyPayment },
                    ]}
                />
            </FlippingCardFront>
            {/* back */}
            <FlippingCardBack style={{ position: 'relative', width: '100%', height: 'auto' }}>
                <Card sx={{ position: 'relative', width: '98%', height: '98%' }}>
                    <CardMedia
                        component="img"
                        alt={propertyTitle}
                        height="140"
                        image={propertyPhotos[1]}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" noWrap component="div">{propertyTitle}</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ maxHeight: '130px', overflowY: 'scroll' }}> {propertyDescription}  </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to={`/order`}>
                            <Button size="small"
                                onClick={() => {
                                    dispatch(ClickedProperty({
                                        property: item,
                                        owner: 'seller',
                                    }));
                                }}
                            >More Details</Button>
                        </Link>
                    </CardActions>
                </Card>
            </FlippingCardBack>
        </FlippingCard>
    )
}