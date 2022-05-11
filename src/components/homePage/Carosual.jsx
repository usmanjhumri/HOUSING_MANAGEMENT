import { Box } from "@mui/system"


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


// 
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import {Typography } from "@mui/material"; 

import MainSlider1 from './m1.jpg';
import MainSlider2 from './m2.jpg';
import MainSlider3 from './m3.jpg';
import MainSlider4 from './m4.jpg';
import MainSlider5 from './m5.jpg';
import CardSkelton from "../helper/CardSkelton";




const MainSlider = [MainSlider1, MainSlider2, MainSlider3, MainSlider4, MainSlider5]










export const MultiCarsol = ({ propertiesArray=[1,2,3,4,5,6,7] }) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 538 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 538, min: 0 },
            items: 1
        }
    };

    return (
        <Box>
            <Carousel 
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            >
                {
                    propertiesArray.map((obj, index) => <CardSkelton item={obj} key={index} />)
                }
            </Carousel>;
        </Box>
    )
}





export const ResponsiveCarouselDisplayer = ({ }) => {

    return (
        <Box>
            <ResponsiveCarousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={true}
                showIndicators={false}
                showArrows={true}
                direction="right"
            >
                {
                    MainSlider.map((item, index) => <Box sx={{position:'relative',padding:'0px'}}>
                        <img style={{maxHeight:'600px'}} key={index} src={item} alt="slider" />
                        <Box sx={{position:'absolute',  top:' 50%', left:'50%', transform:'translate(-50%,-50%)', background:'rgba(0,0,0,0.5)'}}>
                            <Typography variant="h5" component="h2" sx={{color:'white',  textAlign:'center'}}>
                                Slider Title
                            </Typography>
                        </Box>
                    </Box>)
                }
                
            </ResponsiveCarousel>
        </Box>
    )
}