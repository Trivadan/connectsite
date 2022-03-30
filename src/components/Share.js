import React, { useState } from "react";
import {
  makeStyles,
  Card,
//   CardActionArea,
//   CardHeader,
//   Avatar,
//   IconButton,
  CardContent,
} from "@material-ui/core";

import { } from "@material-ui/icons";
// import { red } from "@material-ui/core/colors";


const useStyles = makeStyles((theme) => ({
    cardarea:{
        marginBottom: "20px",
        border: "none",
        boxShadow: "0px -4px 4px rgba(0, 0, 0, 0.05), 0px 4px 11px rgba(0, 0, 0, 0.1)",
    },
}));

function Post({name}) {

  const classes = useStyles();

  return (
      <Card className={classes.cardarea}>
          <CardContent></CardContent>
      </Card>
  );
}
export default Post;