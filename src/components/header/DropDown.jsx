import { Menu, MenuItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

export default ({ section, children }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (<div style={{ position: 'relative'  }}>
        <Typography
            aria-controls={open ? `${section}-menu` : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick} 
            fontSize='inherit'
            sx={{color:'white', cursor: 'pointer', borderLeft: '2px solid transparent', '&:hover': { borderLeft: '2px solid #4B0606', transition: '.8s', }, fontWeight: 'bold', paddingLeft: '5px', lineHeight: 1, transition: '.5s', }}
        >
            {section}
        </Typography>
        <Menu
            anchorEl={anchorEl}
            id={`${section}-menu`}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            position='relative'
            zIndex='333'
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 0px 2px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                },
            }}
            color='#5b5b5b'
            transformOrigin={{ horizontal: 'left', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        >


            {
                children.map((child, index) => {
                    return (
                        <Link to={child.link} key={child.link} style={{ color: 'inherit', textDecoration: 'none' }} >
                            <MenuItem
                                key={index}
                                sx={{
                                    '&:hover': {
                                        backgroundColor: 'rgba(0,0,0,0)',
                                    },
                                    fontSize: '13px',
                                    fontFamily: 'Rubik',
                                    textTransform: 'uppercase',
                                    lineHeight: '25px',
                                    fontWeight: 400,
                                    fontStyle: 'normal',
                                    color: '#010101',
                                    width: '220px'
                                }}
                            >
                                {child.label}
                            </MenuItem>
                        </Link>
                    )
                })
            }
        </Menu>
    </div>
    );
}