import React from 'react';
import {Typography, Button, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@mui/material' 
// this is how we will import componetns
// to import icon
import { PhotoCamera } from '@mui/icons-material';

import './css/home.css';

// import { makeStyles, withStyles } from 'tss-react/mui'

// // this is the syntax to style material ui component
// const useStyles = makeStyles((theme) => ({
//     container: {
//       backgroundColor: theme.palette.background.paper,
//       // these all material ui styles
//       // we can also give our own
//       padding : theme.spacing(8,0,6)
//     }
// }));
const cards = [1,2,3,4,5,6,7,8,9]
 
function App() {
  
  return (
    <>
      {/* this is <h1></h1> in material */}
        {/* <Typography variant='h1'>Hello, World!😍😍😍</Typography> */}
        {/* it provides a lot of default css */}
        <CssBaseline /> 
        <AppBar position='relative'>
              <Toolbar>
                {/* it is that blue line */}
                <PhotoCamera className='icon' /> 
                {/* icon */}
                <Typography variant='h6'>
                  Photo Album
                </Typography>
              </Toolbar>
        </AppBar>
        <main>
          <div className='container'>
            {/* container is materailui container */}
            {/* styling material ui we cant put in each line like below */}
            {/* so the best way is to import makestyles */}
            <Container maxWidth="sm" style={{marginTop: '10px'}}>
              {/* how to put maxwidth sm */}
              {/* gutterBottom --> adds margin at bottom*/}
                <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                  Photo Album
                </Typography>
                <Typography variant='h5' align='center' color='textSecondary' gutterBottom>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit veritatis beatae aliquam quas suscipit porro, ipsam fugiat possimus dolore repudiandae alias placeat cum sint! Quod?
                </Typography>
                <div className='button'>
                  {/* for responsiveness we will go to grid */}
                  <Grid container spacing={2} justifyContent="center">
                    <Grid item>
                      <Button variant='contained' color='primary'>
                          See my photos
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant='outlined' color='primary'>
                          Secondary Action
                      </Button>
                    </Grid>
                  </Grid>
                </div>
            </Container>
          </div>
          <Container className='cardGrid' maxWidth='lg'>
                <Grid container spacing={4}>
                  {cards.map((card) => (
                      <Grid item key={card} xs={12} sm={6} md={4}>
                      <Card className='card'>
                        {/* this is for image */}
                        <CardMedia className='cardMedia' image='https://source.unsplash.com/random' title='image title'/> 
                        <CardContent className='cardContent'>
                            <Typography gutterBottom variant='h5'>
                              Heading
                            </Typography>
                            <Typography>
                              This is a media card. You can use this section to describe the content
                            </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size='small' color='primary'>View</Button>
                          <Button size='small' color='primary'>Edit</Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                  
                  
                </Grid>
          </Container>
          
        </main>
        <footer className='footer'>
            <Typography variant='h6' align='center' gutterBottom>
                  Copyrights @Photo Albums
            </Typography>
            <Typography variant='subtitle1' align='center' color='textSecondary'>
                  Designed by Anish
            </Typography>
        </footer>
    </>

  );
}

export default App;
