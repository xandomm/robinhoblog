import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import moment from 'moment'
const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 400,
    margin:10
  },
  media: {
    height: 140,
  },
});

const backendURL= process.env.REACT_APP_API_URL
//require(`${backendURL}/static/${props.url}`)
export default (props)=>{
  var txt = props.url
  var foto = txt.substring(0, props.url.length - 1)
  const formatDate = moment(props.criado).locale('pt-br').format('DD/MM/YYYY')
  const classes = useStyles();
console.log(foto)
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`${backendURL}/static/${foto}.png`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" id="TitleCard" component="h2">
            {props.title}
          </Typography>
         
          <Typography variant="body2" color="textSecondary" component="p">
          Publicado em: {formatDate}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}