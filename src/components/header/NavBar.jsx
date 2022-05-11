import { Divider, Fab, Grid, Hidden, ListItem, ListItemIcon, ListItemText, SwipeableDrawer, Typography } from '@mui/material';
import Container from '@mui/material/Container'
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import Logo from './logoNew.png';
import React from 'react';
import DropDown from './DropDown';
import MenuIcon from '@mui/icons-material/Menu';
import List from "@mui/material/List";
import { ArrowUpwardRounded, CardMembership, CommentBank, Construction, Dashboard, DesignServices, Directions, FacebookOutlined, Home, HomeMaxOutlined, HomeRepairServiceOutlined, Instagram, LocationCityOutlined, Login, Park, QueryBuilder, TourSharp, Upgrade, WaterDamageOutlined, WorkHistory } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import MobileLists from './MobileLists';
import { useSelector } from 'react-redux'; 





const dataSet = [
    {
        title: 'Home',
        link: '/',
        children: [],
        icon: <HomeMaxOutlined sx={{ color: '#4B0606' }} />
    },
    {
        title: 'About Us',
        icon: <InfoIcon sx={{ color: '#4B0606' }} />,
        link: '/about',
        children: [],
    },
    {
        title: 'View Plots',
        icon: <InfoIcon sx={{ color: '#4B0606' }} />,
        link: '/plots/all/all/all',
        children: [],
    },
    {
        title: 'Cities', 
        icon: <DesignServices sx={{ color: '#4B0606' }} />,
        children: [
            {
                label: "Lahore",
                link: "/lahore",
                icon: <TourSharp sx={{ color: '#4B0606' }} />
            },
            {
                label: "Karachi",
                link: "/karachi",
                icon: <Directions sx={{ color: '#4B0606' }} />
            },
            {
                label: "Islamabad",
                link: "/islamabad",
                icon: <Construction sx={{ color: '#4B0606' }} />
            },
            {
                label: "Peshawar",
                link: "/peshawar",
                icon: <ArrowUpwardRounded sx={{ color: '#4B0606' }} />
            },
            {
                label: "Quetta",
                link: "/quetta",
                icon: <WaterDamageOutlined sx={{ color: '#4B0606' }} />
            },
            {
                label: "Multan",
                link: "/multan",
                icon: <WorkHistory sx={{ color: '#4B0606' }} />
            },
            {
                label: "Faislabad",
                link: "/faislabad",
                icon: <TourSharp sx={{ color: '#4B0606' }} />
            },
            {
                label: "Larkana",
                link: "/larkana",
                icon: <Directions sx={{ color: '#4B0606' }} />
            },
        ],
    },
    {
        title: 'Contact Us',
        link: '/contact',
        children: [],
        icon: <LiveHelpIcon sx={{ color: '#4B0606' }} />
    },

]
export default () => {
    const { currentUserIsActive, currentUserIsAdmin, currentUserIsSeller,
    } = useSelector(state => state.mainReducer);
    let dir = "left";
    const [state, setState] = React.useState({});
    const toggleDrawer = (open) => () => {
        setState({ [dir]: open });
    };



    return (
        <Box sx={{ fontFamily: 'Rubik !important', zIndex: '55', backgroundColor: '#011C37', position: 'relative', zIndex: '999' }}>

            <Container sx={{ padding: '18px 0px' }}>
                <Grid container alignItems='center' justifyContent={'space-between'} sx={{ textTransform: 'uppercase', color: '#010101' }}>
                    <Grid item xs={2} mb={0}>
                        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Box component={'img'} src={Logo} maxWidth={{ xs: '120px', md: '150px' }} paddingLeft={{ xs: '5px', md: '0px' }} />
                        </Link>
                    </Grid>
                    <Hidden smDown>
                        <Grid item container spacing={3} xs={12} md={10} lg={9} fontSize={'12px'} alignItems='flex-end' justifyContent={'flex-end'}>
                            {
                                dataSet.map((section, index) => <Grid item key={section}>
                                    {
                                        section.children.length
                                            ?
                                            <DropDown section={section.title} children={section.children} />
                                            : 
                                            <Link to={section.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <Typography fontSize='inherit'
                                                    sx={{ color: 'white', fontWeight: 'bold', fontStyle: 'normal', borderLeft: '2px solid transparent', '&:hover': { borderLeft: '2px solid #4B0606', transition: '.8s', }, paddingLeft: '5px', lineHeight: 1, transition: '.5s', color: 'white' }}
                                                >
                                                    {section.title}
                                                </Typography>
                                            </Link>
                                        
                                    }
                                </Grid>)
                            }
                            {
                                currentUserIsActive ? <Grid item > <Link to='/dashboard/home' style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <Typography fontSize='inherit'
                                        sx={{ fontWeight: 'bold', color: 'white', fontStyle: 'normal', borderLeft: '2px solid transparent', '&:hover': { borderLeft: '2px solid #4B0606', transition: '.8s', }, paddingLeft: '5px', lineHeight: 1, transition: '.5s', }}
                                    >
                                        Dashboard
                                    </Typography>
                                </Link>
                                </Grid>
                                    :
                                    <>
                                        <Grid item > <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <Typography fontSize='inherit'
                                                sx={{ fontWeight: 'bold', color: 'white', fontStyle: 'normal', borderLeft: '2px solid transparent', '&:hover': { borderLeft: '2px solid #4B0606', transition: '.8s', }, paddingLeft: '5px', lineHeight: 1, transition: '.5s', }}
                                            >
                                                Login
                                            </Typography>
                                        </Link>
                                        </Grid>




                                        <Grid item > <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <Typography fontSize='inherit'
                                                sx={{ fontWeight: 'bold', color: 'white', fontStyle: 'normal', borderLeft: '2px solid transparent', '&:hover': { borderLeft: '2px solid #4B0606', transition: '.8s', }, paddingLeft: '5px', lineHeight: 1, transition: '.5s', }}
                                            >
                                                SignUp
                                            </Typography>
                                        </Link>
                                        </Grid>

                                    </>
                            }
                        </Grid>{/* SubGrid Container */}
                    </Hidden>
                    <Hidden smUp>
                        <Grid item pr={4}>
                            <MenuIcon sx={{
                                fontSize: '25px',
                                color: 'white',
                                cursor: 'pointer',
                                '&:hover': {
                                    color: '#4B0606',
                                    transition: '.8s',
                                }
                            }}
                                onClick={toggleDrawer(dir, true)}
                            />

                            <SwipeableDrawer
                                anchor={dir}
                                open={state[dir]}
                                onClose={toggleDrawer(false)}
                                onOpen={toggleDrawer(true)}
                            >
                                <Box
                                    sx={{
                                        width: 200,
                                        marginLeft: "1vw",
                                        marginRight: "1vw",
                                        marginTop: "5vh",
                                    }}
                                    role="presentation"
                                // onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}
                                >
                                    <img src={Logo} alt={Logo} width="90%" />
                                    <List>
                                        {
                                            dataSet.map((item) => {
                                                return (
                                                    <MobileLists toggleDrawer={toggleDrawer} key={item} item={item} />
                                                );
                                            })
                                        }
                                        {
                                            currentUserIsActive ?
                                                <Link to={'/dashboard/home'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                    <ListItem button onClick={toggleDrawer(false)}>
                                                        <ListItemIcon>
                                                            <Dashboard />
                                                        </ListItemIcon>
                                                        <ListItemText>
                                                            <Typography sx={{ color: '#4B0606', fontWeight: 'bold', fontsize: '12px', }}>
                                                                Dashboard
                                                            </Typography>
                                                        </ListItemText>
                                                    </ListItem>
                                                </Link>
                                                :
                                                <>
                                                    <Link to={'/login'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                        <ListItem button key={'Login'} onClick={toggleDrawer(false)}>
                                                            <ListItemIcon>
                                                                <Login />
                                                            </ListItemIcon>
                                                            <ListItemText>
                                                                <Typography sx={{ color: '#4B0606', fontWeight: 'bold', fontsize: '12px', }}>
                                                                    Login
                                                                </Typography>
                                                            </ListItemText>
                                                        </ListItem>
                                                    </Link>


                                                    <Link to={'/signup'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                        <ListItem button key={'signup'} onClick={toggleDrawer(false)}>
                                                            <ListItemIcon>
                                                                <Login />
                                                            </ListItemIcon>
                                                            <ListItemText>
                                                                <Typography sx={{ color: '#4B0606', fontWeight: 'bold', fontsize: '12px', }}>
                                                                    SignUp
                                                                </Typography>
                                                            </ListItemText>
                                                        </ListItem>
                                                    </Link>

                                                </>
                                        }
                                    </List>
                                    <Divider
                                        sx={{
                                            marginTop: '10px',
                                            marginBottom: '10px',
                                        }}
                                    >
                                    </Divider>
                                    <Grid container spacing={4} mb={4} justifyContent={'center'}>
                                        <Grid item>
                                            <Fab variant="extended" aria-label="Delete" sx={{ '&:hover': { background: '#1778F2', height: '80px' }, background: '#1778F2', fontSize: '15px', fontWeight: 'bold', width: '20px', height: '70px', transition: '.5s', borderTopRadius: '40%', alignItems: 'flex-start' }}>
                                                <a href='https://www.facebook.com' target={'_blank'}>
                                                    <FacebookOutlined sx={{ marginTop: '10px', color: 'white', }} />
                                                </a>
                                            </Fab>
                                        </Grid>
                                        <Grid item>
                                            <Fab variant="extended" aria-label="Delete" sx={{ '&:hover': { background: '#F00075', height: '80px' }, background: '#F00075', fontSize: '15px', fontWeight: 'bold', width: '20px', height: '70px', transition: '.5s', borderTopRadius: '40%', alignItems: 'flex-start' }}>
                                                <a href='https://www.instagram.com' target={'_blank'}>
                                                    <Instagram sx={{ marginTop: '10px', color: 'white', }} />
                                                </a>
                                            </Fab>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </SwipeableDrawer>
                        </Grid>
                    </Hidden>
                </Grid>
            </Container >
        </Box >
    );
}