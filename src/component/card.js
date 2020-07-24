import React, {useContext} from 'react';
import './../App.css';
import Context from './context';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    display: 'flex',
  },
  showname: {
    font: 20,
  },
  cartcontent:{
    display: 'flex',
    justifyContent: 'space-between',
  },
  btncheck: {
    color: 'white',
    fontSize: 20,
    width: 200,
    height: 40,
    backgroundColor: 'black',
    '&:hover':{
      backgroundColor: '#efefefef',
      color: 'black',
    }
  },
  
}));


function Card() {
  const classes = useStyles();
  const [cont, setCont] = useContext(Context)
  return (
    

    <div className="App">

<button className={classes.btncheck} onClick={()=>{setCont([])
document.getElementsByClassName('MuiBadge-badge')[0].innerHTML = 0}}>Checkout</button>

            {cont.map((element)=>{
                return <Grid container direction="row" justify="space-around" alignItems="center">
                  <Grid item xs={12} sm={6} className="imgcenter">
                      <img className='imag' src={element.img} alt="Nike Product" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                        <h4 className={classes.showname}>{element.name}</h4>
                        <p className={classes.showpara}>
                          Product from Nike. Nike service's are recognised by whole world. We hope you will 
                          also love it.
                        </p>
                        <CardContent className={classes.cartcontent}>
                          <Typography gutterBottom variant="h5" component="h2">
                            Price
                          </Typography>
                          <Typography variant="h5" color="textSecondary" component="p">${element.price}
                            
                          </Typography>
                      </CardContent>
                      <CardContent className={classes.cartcontent}>
                          <Typography gutterBottom variant="h5" component="h2">
                            Quantity
                          </Typography>
                          <Typography variant="h5" color="textSecondary" component="p">{element.quantity}
                            
                          </Typography>
                      </CardContent>
                      <CardContent className={classes.cartcontent}>
                          <Typography gutterBottom variant="h5" component="h2">
                            Total Price
                          </Typography>
                          <Typography variant="h5" color="textSecondary" component="p">${Number(element.price)*Number(element.quantity)}
                            
                          </Typography>
                      </CardContent>
                  </Grid>
                  </Grid>
            })}
    </div>
  );
}

export default Card;