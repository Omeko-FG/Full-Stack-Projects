import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import axios from 'axios';
import { Grid } from '@mui/material';
import useBlogCall from '../../hooks/useBlogCall';
import { useParams } from "react-router-dom";


const PostCard = ({ blog }) => {
  const [posts, setPosts] = useState([]);

  const {postLike, editBlogData } = useBlogCall()
  const {id} = useParams()

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/blog/post/')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const formatPublishDate = (publishDate) => {
    const date = new Date(publishDate);
    const formattedDate = date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    return formattedDate;
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      {posts.map(post => (
        <Grid item key={post.id}>
          <Card sx={{ maxWidth: 345, height: 500 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={post.title}
              subheader={formatPublishDate(post.publish_date)}
            />
            <CardMedia
              component="img"
              height="194"
              image={post.image}
              alt=""
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {post.content}
              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ justifyContent: 'flex-end' }}>
              <IconButton aria-label="add to favorites" >
                <FavoriteIcon onClick={() => postLike("likes",id)} color="error" />
                {/* <Typography>{blog.likes}</Typography> */}
              </IconButton>
              <IconButton aria-label="edit">
                <EditIcon onClick={() => editBlogData("blogs",id)}  color='warning'/>
              </IconButton>
              <IconButton aria-label="notifications">
                <NotificationsActiveIcon color='secondary'/>
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default PostCard;
