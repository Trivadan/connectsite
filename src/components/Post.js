import React, { useState } from "react";
import {
  makeStyles,
  styled,
  Card,
  CardActionArea,
  CardMedia,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  Typography,
  Collapse,
  Modal,
  Container,
  Button,
  ButtonGroup,
  TextField,
} from "@material-ui/core";

import { ChatBubbleOutlineOutlined, Close, MoreVert as MoreVertIcon, ShareOutlined, ThumbUpAltOutlined,  } from "@material-ui/icons";
import { } from "react-router-dom";
import { Users } from "../dummyData";


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    // transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
  }));


const useStyles = makeStyles((theme) => ({
    cardarea:{
        marginBottom: "20px",
        border: "none",
        boxShadow: "none",
    },
    modalcontainer: {
        width: "100%",
        height: "90vh",
        marginTop: "5vh",
        backgroundColor: "#FFF",
        position: "absolute",
        top:0,
        bottom:0,
        left:0,
        right:0,
        margin: "auto",
        border: "none",
        borderRadius: "0",
        maxWidth: "99%",
    },
    seemore: {
      display: "inline-block",
      color: "#000",
      fontSize: "16px",
      padding: "0",
      '&:hover': {
        background: "none",
        color: "#2CB34A",
    },
    '&:focus': {
        color: "#2CB34A",
    },
    },
    liketop: {
      display: "flex",
      alignItems: "center",
    },
    likeicon: {
      width: "25px",
      height: "25px",
      borderRadius: "50%",
      backgroundColor: "#2CB34A",
      color:"#FFF",
      fontSize: "12px",
      padding: "5px",
      marginRight: theme.spacing(1),
    },
    liketoptext: {
      fontSize: "12px",
    },
    actionbutton: {
      margin: "5px auto 0",
      display: "block",
      textAlign: "center",
      fontSize: "15px",
      borderTop: "1px solid rgba(0,0,0,0.1)",
      borderBottom: "1px solid rgba(0,0,0,0.1)",
      borderRadius: 0,
    },
    buttonaction: {
      width: "33.3333%",
      borderRadius: 0,
      border: "none",
      padding: "10px 0",
      textTransform: "capitalize",
      '&:Hover': {
        color: "#FFF",
        backgroundColor: "#2CB34A",
    },
    },
    actionbuttonIcon: {
      marginRight: theme.spacing(1),
      fontSize: "15px",
    },
    commentblckavatar: {
      marginRight: theme.spacing(3),
    },
    commentblck: {
      display: "flex",
      alignItems: "center",
    },
    textcomment: {
      backgroundColor: "#ccc",
      border: "none",
      borderRadius: "20px",
    }
}));

function Post({post}) {
  // console.log(post);
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [like,setLike] = useState(post.like);
  const [isLiked,setIsLiked] = useState(false);

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }

  return (
      <Card className={classes.cardarea}>
          <CardActionArea>
          <CardHeader
        avatar={
          <Avatar alt="Remy Sharp" src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={Users.filter((u) => u.id === post?.userId)[0].username} 
        subheader={post.date}
      />
          </CardActionArea>

          <CardContent>
        <Typography variant="body2" color="text.secondary" paragraph className="Para">
        {post?.desc}
        </Typography>

        <ExpandMore className={classes.seemore}
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          See More
        </ExpandMore>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
      </CardContent>

      <CardMedia
        component="img"
        height="auto"
        image={post.photo}
        alt="Safaricom Connect"
        onClick={() => setOpen(true)}
      />

      <CardContent>
        <div className={classes.liketop}>
        <ThumbUpAltOutlined className={classes.likeicon} />
        <div className={classes.liketoptext}> {like} </div>
        </div>
      </CardContent>

      <ButtonGroup variant="outlined" aria-label="outlined primary button" className={classes.actionbutton}>
        <Button className={classes.buttonaction} onClick={likeHandler}>
          <ThumbUpAltOutlined className={classes.actionbuttonIcon} /> Like
          </Button>
        <Button className={classes.buttonaction}>
          <ChatBubbleOutlineOutlined className={classes.actionbuttonIcon} /> Comment
          </Button>
        <Button className={classes.buttonaction}>
          <ShareOutlined className={classes.actionbuttonIcon} /> Share</Button>
        </ButtonGroup>

        <CardContent direction="row" spacing={2}>
        <div className={classes.commentblck}>
          <Avatar alt="User" src="/images/avatar.png" className={classes.commentblckavatar} />
          <TextField fullWidth label="fullWidth" id="fullWidth" multiline row={7} className={classes.textcomment} />
        </div>
        </CardContent>

      <Modal open={open}>
          <Container className={classes.modalcontainer}>
          <Button onClick={() => setOpen(false)}><Close /></Button>
          <Typography>Hello World</Typography>
          </Container>
      </Modal>

      </Card>
  );
}
export default Post;