import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';


export default ({ item = {
    title: 'Contact Us',
    link: '/Contact-Us',
    children: [],
}, toggleDrawer }) => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, }}
        >
            {
                item.children.length > 0 ? <React.Fragment>
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText  > <Typography sx={{ color: '#4B0600', fontWeight: 'bold', fontSize:'14px' }}>{item.title}</Typography> </ListItemText>
                        {open ? <ExpandLess style={{ color: '#4B0606' }} /> : <ExpandMore style={{ color: '#4B0606' }} />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {
                                item.children.map((child, index) => {
                                    return <Link to={child.link} key={index} style={{ textDecoration: 'none', color: '#010101' }}>
                                        <ListItemButton onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} key={index} sx={{ pl: 5, transition: '.1s', pt: 0 }}>
                                            <ListItemIcon sx={{ minWidth: '30px', textAlign: 'center' }}>
                                                {/* <StarBorder sx={{ fontSize: '14px' }} /> */}
                                                {child.icon}
                                            </ListItemIcon>
                                            <ListItemText >
                                                <Typography sx={{ fontSize: '14px' }} >
                                                    {child.label}
                                                </Typography>
                                            </ListItemText>
                                        </ListItemButton>
                                    </Link>
                                })
                            }
                        </List>
                    </Collapse>
                </React.Fragment>

                    :

                    <React.Fragment>
                        <Link to={item.link} style={{ textDecoration: 'none', color: 'red' }}>
                            <ListItemButton onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText  > <Typography sx={{ color: '#4B0606', fontWeight: 'bold',fontSize:'14px' }}>{item.title}</Typography> </ListItemText>
                            </ListItemButton>
                        </Link>
                    </React.Fragment>
            }
        </List>
    );
}
