import React, {useContext} from 'react';
import './../App.css';
import {useParams} from 'react-router-dom';
import shoes from './../shoejson';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Context from './context';

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: 50,
    display: 'flex',
  },
  imag: {
    maxWidth: 360,
  },
  contentdiv: {
    textAlign: "left",
  },
  showname: {
    fontSize: 30,
    color: 'black',
    paddingLeft: 20,
  },
  showpara: {
    fontSize: 25,
    paddingRight: 20,
    paddingLeft: 20,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  addbtn: {
    width: 150,
    paddingLeft: 20,
  },
  grid2: {
    paddingLeft: 15,
  }
}));


function Product() {
  const classes = useStyles();
  let {id} = useParams()
  let imge = shoes[id].img;
  const [cont, setCont] = useContext(Context)

  function addtocart(){
    let obj = shoes[id]


    obj.quantity = 1
      let isPresent = 0, ind = 0
      cont.map((element,index)=>{
          if(element.name == obj.name){
              isPresent = 1
              ind = index
              console.log('in map match')
              let c = [...cont]
              // console.log(c[ind].quantity)
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
      
      // console.log(cont)

  }

  return (
    <div className={classes.main}>

    <Grid container direction="row" justify="space-around" alignItems="center">
        
        <Grid item xs={12} sm={6}>
          <img className={classes.imag} src={imge} alt="Nike Product" />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.grid2}>
          <paper className={classes.paper}>
            <h4 className={classes.showname}>{(id.replace(/-/g,' ')).toUpperCase()}</h4>
            <p className={classes.showpara}>
              Product from Nike. Nike service's are recognised by whole world. We hope you will also love it.
            </p>
            <CardActions className={classes.addbtn}>
            <Button onClick={()=>{addtocart()}} className="addtobtn" color="primary">
              Add to Cart
            </Button>
            </CardActions>
           </paper>
          
        </Grid>
       
      </Grid>

    </div>
  );
}

export default Product;