import React from 'react';
import {
    Container,
    makeStyles,
  } from "@material-ui/core";

import Leftbar from '../../components/Leftbar';
import Feeds from '../../components/Feeds';
import Rightbar from '../../components/Rightbar';
// import Slider from '../inc/Slider';


const useStyles = makeStyles((theme) => ({
    bodycontainer: {
        backgroundColor: "#f5f5f5",
    },
    container:{
        paddingTop: "20px",
        paddingBottom: "20px",
    },
}));


function Home() {
  const classes = useStyles();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <div className={classes.bodycontainer}>
        <Container className={classes.container}>
        <div className="row">
        <Leftbar />
        <Feeds />
        <Rightbar />
        </div>
        </Container>
        </div>
    )
}

export default Home
