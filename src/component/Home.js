import React, {useContext} from 'react';
import './../App.css';
import shoes from './../shoejson.json';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Context from './context';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  root1: {
    // maxWidth: 345,
    margin: '0 auto',
    marginTop: 30,
    boxShadow: "5px 5px 10px 2px #efefefef",
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  cartcontent:{
    display: 'flex',
    justifyContent: 'space-between',
  },
  media: {
    height: 200,
  },
}));

function Home() {

  
  const [cont, setCont] = useContext(Context)

  function addtocart(p){
    let imge = shoes[p].img;
    let obj = shoes[p]


    obj.quantity = 1
      let isPresent = 0, ind = 0
      cont.map((element,index)=>{
          if(element.name == obj.name){
              isPresent = 1
              ind = index
              console.log('in map match')
              let c = [...cont]
              c[ind] = {name:c[ind].name,img:c[ind].img,quantity:obj.quantity+c[ind].quantity,price:c[ind].price}
              console.log(c,c[ind].quantity)
              setCont(c)
          }
      })
      if(isPresent == 1){
          isPresent = 0
        }else{
          setCont(cont => [...cont, obj])
          document.getElementsByClassName('MuiBadge-badge')[0].innerHTML = cont.length+1
          isPresent = 0
      }
      
      console.log(cont)

  }



  console.log((shoes))
  const classes = useStyles();
  return (
    <div className={classes.root} className="App">
        <Grid container direction="row" justify="center" alignItems="flex-start">
          {Object.keys(shoes).map((element, ind)=>{
            console.log(element, ind)
            return <Grid item xs={12} sm={4}>

            <Card className={classes.root1}>
                <CardActionArea>
                  <Link to={`/product/${element}`}>
                      <CardMedia
                        className={classes.media}
                        image={shoes[element].img}
                        title="Contemplative Reptile"
                      />
                  </Link>
                  <CardContent className={classes.cartcontent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {shoes[element].name}
                    </Typography>
                    <Typography variant="h5" color="textSecondary" component="p">${shoes[element].price}
                    </Typography>
                  </CardContent>
                  </CardActionArea>
                  <CardActions className="addtobtn">
                    <Button onClick={()=>{
                      addtocart(Object.keys(shoes)[ind])
                    }} className="addtobtn" color="primary">
                      Add to Cart
                    </Button>
                  </CardActions>
            </Card>

          </Grid>
          })}
      </Grid>
    </div>
  );
}

export default Home;