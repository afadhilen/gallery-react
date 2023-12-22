import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MemoarakuPost from '../assets/MemoarakuPosts'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Grid } from '@mui/material'

function Memoaraku() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/me/media?fields=id,username, media_url,caption,timestamp&access_token=IGQWROczA3enpIbW5uSXRwUHZAhLVoxUnNveWsyOVVoeFFZAMEItV21RTUlicUxhS2cyN0VkTTQ3cDhHdWFsS09hUzc5M2ROWVRqeXl5bDFZANWtXYm02dzQ4MGV0WTU2al93Y2F4cmVqc0Y1ZAHR3Vy1aX1haMjlLRFBBOTN5WVpoYlBXWVkZD`
        )
        const userMedia = response.data.media.data
        setPosts(userMedia)
      } catch (error) {
        console.error('Error fetching Instagram posts:', error)
      }
    }
    fetchInstagramPosts()
  }, [])

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleString() // You can customize the date format using toLocaleString options
  }
  return (
    <>
      <br />
      <h1 className="text-white text-center p-2" id="memoaraku">
        Memoaraku Instagram Gallery
      </h1>
      {MemoarakuPost.map((post) => (
        <Grid container className="p-4" spacing={0} alignItems="center" justifyContent="center">
          <Grid item xs={6}>
            <Card>
              <CardHeader
                avatar={<Avatar aria-label="recipe">M</Avatar>}
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={post.username}
                subheader={formatTimestamp(post.timestamp)}
              />
              <CardMedia component="img" image={post.media_url} alt={post.id} />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {post.caption}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      ))}
    </>
  )
}

export default Memoaraku
