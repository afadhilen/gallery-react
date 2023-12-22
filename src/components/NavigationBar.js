// import {Navbar, Container, Nav} from "react-bootstrap";
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

function NavigationBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
                <MenuIcon />
              </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Memoaraku
          </Typography>
          <Button color="inherit" href="#memoaraku">
            Memoaraku
          </Button>
          <Button color="inherit" href="#trending">
            Trending
          </Button>
          <Button color="inherit" href="#potrait">
            Potrait
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    /* <Box sx={{display: "flex"}}>
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && {display: "none"})
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Memoaraku
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>{theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}</IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              {["Trending", "Potrait"].map((text, index) => (
                <ListItem key={text} disablePadding sx={{display: "block"}}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center"
                      }}
                    >
                      {index % 2 === 0 ? <WhatshotIcon /> : <FilterIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} sx={{opacity: open ? 1 : 0}} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Drawer>
        </Box> */
    // <div>
    //   <Navbar variant="dark">
    //     <Container>
    //       <Navbar.Brand href="/">Memoaraku</Navbar.Brand>
    //       <Nav>
    //         <Nav.Link href="#trending">Trending</Nav.Link>
    //         <Nav.Link href="#potrait">Potrait</Nav.Link>
    //       </Nav>
    //     </Container>
    //   </Navbar>
    // </div>
  )
}

export default NavigationBar

// const Navbar = () => {
//   return (
//     <div>
//       <h1>Test Navbar</h1>
//     </div>
//   );
// };

// export default Navbar;
