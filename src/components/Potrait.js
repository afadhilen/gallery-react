import potrait1 from "../assets/AI/Leonardo AI/Output/potrait1.jpg"
import potrait2 from "../assets/AI/Leonardo AI/Output/potrait2.jpg"
import potrait3 from "../assets/AI/Leonardo AI/Output/potrait3.jpg"
import potrait4 from "../assets/AI/Leonardo AI/Output/potrait4.jpg"
import potrait5 from "../assets/AI/Leonardo AI/Output/potrait5.jpg"
import potrait6 from "../assets/AI/Leonardo AI/Output/potrait6.jpg"
import potrait7 from "../assets/AI/Leonardo AI/Output/potrait7.jpg"
import potrait8 from "../assets/AI/Leonardo AI/Output/potrait8.jpg"
import potrait9 from "../assets/AI/Leonardo AI/Output/potrait9.jpg"

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

function Potrait() {
  return (
    <>
      <br />
      <h1 className="text-white text-center p-2" id="potrait">
        Potrait Images
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
            <CardMedia component="img" height="350" image={potrait1} alt="Paella dish" />
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
            <CardMedia component="img" height="350" image={potrait2} alt="Paella dish" />
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
            <CardMedia component="img" height="350" image={potrait3} alt="Paella dish" />
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
            <CardMedia component="img" height="350" image={potrait4} alt="Paella dish" />
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
            <CardMedia component="img" height="350" image={potrait5} alt="Paella dish" />
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
            <CardMedia component="img" height="350" image={potrait6} alt="Paella dish" />
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
            <CardMedia component="img" height="350" image={potrait7} alt="Paella dish" />
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
            <CardMedia component="img" height="350" image={potrait8} alt="Paella dish" />
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
            <CardMedia component="img" height="350" image={potrait9} alt="Paella dish" />
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

export default Potrait
