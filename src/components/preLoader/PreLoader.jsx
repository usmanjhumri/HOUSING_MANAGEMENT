import * as React from 'react';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import Hypnosis from "react-cssfx-loading/lib/Hypnosis";



export default () => {
    const { loader } = useSelector(state => state.mainReducer);
    React.useEffect(() => {
        if (loader) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [loader])
    return (
        <>
            {
                loader ? <Grid container justifyContent={'center'} alignItems={'center'}
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 9999,
                        // display: loader ? 'flex' : 'none',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        width: '100vw',
                        height: '100vh',
                    }}
                >
                    <Grid item >
                        <Box>
                            <Hypnosis />
                        </Box>
                    </Grid>
                </Grid>
                    : null
            }
        </>
    )
}