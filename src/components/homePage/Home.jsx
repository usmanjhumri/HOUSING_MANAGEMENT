
import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { MultiCarsol, ResponsiveCarouselDisplayer } from './Carosual';
import E1 from './e1.png';
import E2 from './e2.png';
import E3 from './e3.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



export default () => {
    const { allProperties } = useSelector(state => state.mainReducer);
   
    return (
        <Box>
            <Grid container spacing={4} pt={0}>
                {/* JUST SLIDER */}
                <Grid item xs={12} m={0} p={0}>
                    <ResponsiveCarouselDisplayer />
                </Grid>
                {/* Latest Properties */}
                <Grid item xs={12}>
                    <Box sx={{ textAlign: 'center' }} my={5}>
                        <Typography variant="h4" component="h2"><b>Latest Properties</b></Typography>
                        <Typography variant="body2" textAlign='center' mt={2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec euismod, nisi vel consectetur interdum,
                        </Typography>
                    </Box>
                    <MultiCarsol propertiesArray={allProperties} />
                </Grid> 
                 {/* Featured Properties */}
                <Grid item xs={12}>
                    <Box sx={{ textAlign: 'center' }} my={5}>
                        <Typography variant="h4" component="h2"><b>Featured Properties</b></Typography>
                        <Typography variant="body2" textAlign='center' mt={2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec euismod, nisi vel consectetur interdum,
                        </Typography>
                    </Box>
                    <MultiCarsol propertiesArray={allProperties} />
                </Grid>
                {/* newsSectoin */}
                <Grid item xs={12}>
                    <Box sx={{ textAlign: 'center' }} my={5}>
                        <Typography variant="h4" component="h2"><b>Latest News</b></Typography>
                        <Typography variant="body2" textAlign='center' mt={2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec euismod, nisi vel consectetur interdum,
                        </Typography>
                    </Box>
                    <Container>
                        <Grid container spacing={3}>
                            {
                                [1, 2, 3, 4, 5, 6, 7].map((item, index) => <Grid key={index} item xs={12} sm={6}>
                                    <Box component={Paper} p={2} sx={{
                                        '&:hover': {
                                            boxShadow: '0px 0px 10px rgba(0,0,0,0.2)'
                                        }
                                    }}>
                                        <Typography variant="h6" component="h2"><b>Latest News 1</b></Typography>
                                        <Typography variant="body2" noWrap sx={{
                                            color: 'orange',
                                            fontSize: '10px',
                                            maxWidth: '30%',
                                        }} >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Donec euismod, nisi vel consectetur interdum,
                                        </Typography>
                                        <Typography variant="body2" textAlign='center' mt={3}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Donec euismod, nisi vel consectetur interdum,Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Donec euismod, nisi vel consectetur interdum,
                                        </Typography>
                                        <Box sx={{ textAlign: 'right' }}>
                                            <Button color="primary">
                                                Read More
                                            </Button>
                                        </Box>

                                    </Box>
                                </Grid>)
                            }
                        </Grid>
                    </Container>

                </Grid>

                {/* Our help */}
                <Grid item container xs={12} spacing={3} justifyContent='center' alignItems={'center'}>
                    <Grid item xs={12} >
                        <Box sx={{ textAlign: 'center' }} my={5}>
                            <Typography variant="h4" component="h2"><b>End to end assistance</b></Typography>
                            <Typography variant="body2" textAlign='center' mt={2}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec euismod, nisi vel consectetur interdum,
                            </Typography>
                        </Box>
                    </Grid>
                    {
                        [
                            {
                                img: E1,
                                title: 'Lorem ipsum dolor sit amet',
                                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel consectetur interdum,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel consectetur interdum,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel consectetur interdum,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel consectetur interdum,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel consectetur interdum,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel consectetur interdum,Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            },
                            {
                                img: E2,
                                title: 'Lorem ipsum dolor sit amet',
                                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel consectetur interdum,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel consectetur interdum,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel consectetur interdum,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel consectetur interdum,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel consectetur interdum,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel consectetur interdum,Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            },
                            {
                                img: E3,
                                title: 'Lorem ipsum dolor sit amet',
                                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel consectetur interdum,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel consectetur interdum,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel consectetur interdum,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel consectetur interdum,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel consectetur interdum,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel consectetur interdum,Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            },

                        ].map((obj, index) => <Grid key={index} item xs={10} sm={5} md={3}>
                            <Box component={Paper} p={2} sx={{
                                '&:hover': { boxShadow: '0px 0px 10px rgba (0,0,0,0.2)' },
                                textAlign: 'center'
                            }}>
                                <img src={obj.img} alt="home" width="auto" />
                                <Typography variant="h6" component="h2"><b>{obj.title}</b></Typography>
                                <Typography variant="body2" mt={2} textAlign='justify'>
                                    {obj.desc}
                                </Typography>
                            </Box>
                        </Grid>)
                    }
                </Grid>


                {/* helpful links */}
                <Grid item container xs={12} mb={8} spacing={3} justifyContent='center' alignItems={'center'}>
                    <Grid item xs={12} >
                        <Box sx={{ textAlign: 'center' }} my={5}>
                            <Typography variant="h4" component="h2"><b>Important Links</b></Typography>
                            <Typography variant="body2" textAlign='center' mt={2}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec euismod, nisi vel consectetur interdum,
                            </Typography>
                        </Box>
                    </Grid>
                    {
                        [
                            [
                                { title: 'Lorem ipsum dolor sit amet', myLink: '/' },
                                { title: 'Lorem ipsum dolor sit amet', myLink: '/' },
                                { title: 'Lorem ipsum dolor sit amet', myLink: '/' },
                                { title: 'Lorem ipsum dolor sit amet', myLink: '/' },
                                { title: 'Lorem ipsum dolor sit amet', myLink: '/' },
                                { title: 'Lorem ipsum dolor sit amet', myLink: '/' },
                            ],
                            [
                                { title: 'Lorem ipsum dolor sit amet', myLink: '/' },
                                { title: 'Lorem ipsum dolor sit amet', myLink: '/' },
                                { title: 'Lorem ipsum dolor sit amet', myLink: '/' },
                                { title: 'Lorem ipsum dolor sit amet', myLink: '/' },
                                { title: 'Lorem ipsum dolor sit amet', myLink: '/' },
                                { title: 'Lorem ipsum dolor sit amet', myLink: '/' },
                            ],
                            [
                                { title: 'Lorem ipsum dolor sit amet', myLink: '/' },
                                { title: 'Lorem ipsum dolor sit amet', myLink: '/' },
                                { title: 'Lorem ipsum dolor sit amet', myLink: '/' },
                                { title: 'Lorem ipsum dolor sit amet', myLink: '/' },
                                { title: 'Lorem ipsum dolor sit amet', myLink: '/' },
                                { title: 'Lorem ipsum dolor sit amet', myLink: '/' },
                            ],
                        ].map((obj, index) => <Grid key={index} item xs={10} sm={5} md={3}>
                            {
                                obj.map((link, indx) => <Box sx={{ textAlign: 'center' }} key={indx}>
                                    <Link to={link.myLink} className='linkColors' variant="body2" color="textSecondary" >
                                        {link.title} {indx + 1}
                                    </Link>
                                </Box>)
                            }
                        </Grid>)
                    }
                </Grid>

            </Grid>
        </Box>
    )
}