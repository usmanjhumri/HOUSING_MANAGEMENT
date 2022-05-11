import { Box } from "@mui/system"


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


// 
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import { Typography } from "@mui/material";















export const OrderPageResponsiveCarouselDisplayer = ({ images }) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 538 },
            items: 1
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
                    images.map((item, index) => <div style={{ textAlign: 'center' }}>
                        <Box component='img' src={item} width={{ xs: '100%', md: '95%' }} sx={{
                            maxWidth: '547px',
                            maxHeight: '373px',
                        }} key={index} />
                    </div>)
                }
            </Carousel>;
        </Box>
    )
}

