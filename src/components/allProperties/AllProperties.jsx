import { Box } from "@mui/system";
import { Link, useParams } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { FlippingCard, FlippingCardFront, FlippingCardBack, UserCard, NewsHeaderCard } from "react-ui-cards";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Pagination } from '@mui/material';
import CardSkelton from "../helper/CardSkelton";
import { useDispatch, useSelector } from "react-redux";
import { allPropertiesLoader } from "../../RTK/Reducers/Reducers";
export default () => {
    const { size, city, price } = useParams();

    const { allProperties } = useSelector(state => state.mainReducer);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(allPropertiesLoader())
    }, [dispatch]);

    const dataRefesher = () => {
        dispatch(allPropertiesLoader())
    }




    return (
        <div>
            <Box maxWidth='xl' margin='auto auto 50px auto' >
                
                <Grid container spacing={2} justifyContent='center' alignItems='center' margin='auto' >
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={dataRefesher}>
                            Refresh
                        </Button>
                    </Grid>
                    {
                        allProperties && allProperties.map((item, index) => <Grid key={index} item xs={12} sm={6} md={4} lg={3} >
                            <CardSkelton item={item} />
                        </Grid>)
                    }

                    <Grid item xs={12} textAlign='center'>
                        <Pagination count={10} sx={{ display: 'inline-block' }} />
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}