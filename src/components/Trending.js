// import {Container, Row, Col, Card} from "react-bootstrap"
import trending1 from "../assets/AI/Leonardo AI/Output/trending1.jpg"
import trending2 from "../assets/AI/Leonardo AI/Output/trending2.jpg"
import trending3 from "../assets/AI/Leonardo AI/Output/trending3.jpg"
import trending4 from "../assets/AI/Leonardo AI/Output/trending4.jpg"
import trending5 from "../assets/AI/Leonardo AI/Output/trending5.jpg"
import trending6 from "../assets/AI/Leonardo AI/Output/trending6.jpg"

import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import {red} from "@mui/material/colors"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import {Grid} from "@mui/material"

function Trending() {
  return (
    <>
      <br />
      <h1 className="text-white text-center p-2" id="trending">
        Trending Images
      </h1>
      <Grid container rowSpacing={2} spacing={2} className="p-4">
        <Grid item xs={4}>
          <Card>
            <CardHeader
              avatar={
                <Avatar sx={{bgcolor: red[900]}} aria-label="recipe">
                  AI
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Leonardo.AI"
              subheader="December 21, 2012"
            />
            <CardMedia component="img" height="350" image={trending1} alt="Paella dish" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet augue dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
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
        <Grid item xs={4}>
          <Card>
            <CardHeader
              avatar={
                <Avatar sx={{bgcolor: red[900]}} aria-label="recipe">
                  AI
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Leonardo.AI"
              subheader="December 21, 2012"
            />
            <CardMedia component="img" height="350" image={trending2} alt="Paella dish" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet augue dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
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
        <Grid item xs={4}>
          <Card>
            <CardHeader
              avatar={
                <Avatar sx={{bgcolor: red[900]}} aria-label="recipe">
                  AI
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Leonardo.AI"
              subheader="December 21, 2012"
            />
            <CardMedia component="img" height="350" image={trending3} alt="Paella dish" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet augue dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
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
        <Grid item xs={4}>
          <Card>
            <CardHeader
              avatar={
                <Avatar sx={{bgcolor: red[900]}} aria-label="recipe">
                  AI
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Leonardo.AI"
              subheader="December 21, 2012"
            />
            <CardMedia component="img" height="350" image={trending4} alt="Paella dish" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet augue dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
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
        <Grid item xs={4}>
          <Card>
            <CardHeader
              avatar={
                <Avatar sx={{bgcolor: red[900]}} aria-label="recipe">
                  AI
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Leonardo.AI"
              subheader="December 21, 2012"
            />
            <CardMedia component="img" height="350" image={trending5} alt="Paella dish" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet augue dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
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
        <Grid item xs={4}>
          <Card>
            <CardHeader
              avatar={
                <Avatar sx={{bgcolor: red[900]}} aria-label="recipe">
                  AI
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Leonardo.AI"
              subheader="December 21, 2012"
            />
            <CardMedia component="img" height="350" image={trending6} alt="Paella dish" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet augue dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
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
    </>
  )
}

export default Trending
