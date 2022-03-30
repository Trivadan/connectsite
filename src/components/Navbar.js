import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  CssBaseline,
  InputBase,
  makeStyles,
  useTheme,
  useMediaQuery,
  alpha,
  Avatar,
} from "@material-ui/core";

import { Cancel, Search } from "@material-ui/icons";

import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

// import Logo from '../public/images/safaricom-connect-logo.png';
// import User from '../public/images/avatar.png';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#162d54",
    },
        navlinks: {
        marginLeft: theme.spacing(5),
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    logoimg: {
      [theme.breakpoints.down("sm")]:{
        width: "130px",
    },
    },
    searcharea: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "2px 10px",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
        borderRadius: theme.shape.borderRadius,
        // width: "20%",
        [theme.breakpoints.down("sm")]:{
          display: (props)=> props.open ? "flex" : "none",
      },
    },
    input: {
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
            width: '25ch',
            '&:focus': {
                width: '30ch',
            },
            },
        },
    },
    avatararea: {
      // display: "flex",
      display: (props)=> props.open ? "none" : "flex",
      alignItems: "center",
    },
    avatar: {
      borderRadius: "5px",
      marginRight: theme.spacing(3),
    },
    mobilesearch: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]:{
        display: "none",
        cursor: "pointer",
    },
    },
    searchclose: {
      // display: (props)=> props.open ? "flex" : "none",
      cursor: "pointer",
      fontSize: "20px",
      [theme.breakpoints.up("sm")]:{
        display: "none",
    },
    },
    righttopbar: {
      display: "flex",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "16px",
        marginLeft: theme.spacing(5),
        borderBottom: "2px solid transparent",
        padding: "21px 0",
        "&:hover": {
            color: "#fdc600",
            borderColor: "#fdc600",
        },
        "&:active": {
          color: "#fdc600",
          borderColor: "#fdc600",
      },
  },
}));

function Navbar() {
  const [open, setOpen] = useState(false);
  const classes = useStyles( {open} );
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="sticky">
      <CssBaseline />
      <Toolbar className={classes.toolbar}>
      <div class="header-logo">
            <Link to="/" className=""><img src="/images/safaricom-connect-logo.png" alt="Safaricom Logo" className={classes.logoimg} /></Link>
        </div>

        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/editions" className={classes.link}>
              Editions
            </Link>
          </div>
        )}
        
        <div className={classes.righttopbar}>
        <div className={classes.searcharea}>
            <InputBase placeholder="Search..." className={classes.input}/>
            <Search />
            <Cancel className={classes.searchclose}   onClick={() => setOpen(open => !open)}/>
        </div>
        


        <div className={classes.avatararea}>
          <Search className={classes.mobilesearch} onClick={() => setOpen(true)}/>
          <Avatar alt="Safaricom User" src="/images/avatar.png" className={classes.avatar}  />
          {/* <Avatar alt="Safaricom User" src={User} className={classes.avatar}  /> */}
        </div>
        </div>

      </Toolbar>
    </AppBar>
  );
}
export default Navbar;