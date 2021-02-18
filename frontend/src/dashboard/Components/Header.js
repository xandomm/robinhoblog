import React from 'react';

import { Link }  from "react-router-dom";

import {
AppBar,
Drawer,
IconButton,
List,
ListItem,
ListItemText,
ListItemIcon,
Hidden,
Toolbar,
Typography
} from '@material-ui/core'

import { makeStyles } from "@material-ui/core/styles"

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home'
import CategoryIcon from '@material-ui/icons/Category';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));



const Header = (props) => {
    
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const drawer = (
<List>
<Link to='/'>
<ListItem button className = "navText">
  <ListItemIcon>
    <HomeIcon className="icons" />
  </ListItemIcon>
  <ListItemText primary="Home"/>
</ListItem>
</Link>
<Link to='/produtos'>
<ListItem button className = "navText">
  <ListItemIcon>
    <CategoryIcon className="icons" />
  </ListItemIcon>
  <ListItemText primary="Produtos"/>
</ListItem>
</Link>
<Link to='/pedidos'>
<ListItem button className = "navText">
  <ListItemIcon>
    <ShoppingCartIcon className="icons" />
  </ListItemIcon>
  <ListItemText primary="Pedidos"/>
</ListItem>
</Link>
<Link onClick={() => {sessionStorage.removeItem('secretCode'); window.location.reload()}}>
<ListItem button className = "navText">
  <ListItemIcon>
    <ExitToAppIcon className="icons" />
  </ListItemIcon>
  <ListItemText primary="Logout"/>
</ListItem>
</Link>
</List>  
)

  return (
    <div>
    <div>
    <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          
          <IconButton onClick={handleDrawerToggle} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    <nav>
    <Hidden smUp implementation="css">
          <Drawer
            
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              width:"240px",
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
    </nav>
    </div>
  );

}

export default Header;
// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import HomeIcon from '@material-ui/icons/Home';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import InputBase from '@material-ui/core/InputBase';
// import Badge from '@material-ui/core/Badge';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import IconButton from '@material-ui/core/IconButton';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import RecentActorsIcon from '@material-ui/icons/RecentActors';
// import InfoIcon from '@material-ui/icons/Info';

// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
  
// });

// export default function TemporaryDrawer() {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
    
//     left: false,
    
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <div
//       className={clsx(classes.list, {
//         [classes.fullList]: anchor === 'top' || anchor === 'bottom',
//       })}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//       <a href="/"><ListItem button >
//       <ListItemIcon><HomeIcon/> </ListItemIcon>
//             <ListItemText  primary="Página inicial" style={{color: "#022235"}}/></ListItem></a>
//             <a href="/contato"><ListItem button >
//       <ListItemIcon><RecentActorsIcon/> </ListItemIcon>
//             <ListItemText  primary="Contato" style={{color: "#022235"}}/></ListItem></a>
//       <a href="/"><ListItem button >
//       <ListItemIcon><InfoIcon/> </ListItemIcon>
//             <ListItemText  primary="Quem somos nós" style={{color: "#022235"}}/></ListItem></a>
          
        
//       </List>
//       <Divider />
//       <List>
//       <a href="/pgempresas">
        
//         <ListItem button >
//       <ListItemIcon> </ListItemIcon>
//             <ListItemText  primary="Restaurantes" style={{color: "#022235"}}/></ListItem></a>  
      
//             <a href="/"><ListItem button >
//       <ListItemIcon> </ListItemIcon>
//             <ListItemText  primary="Casa" style={{color: "#022235"}}/></ListItem></a>

//             <a href="/"><ListItem button >
//       <ListItemIcon> </ListItemIcon>
//             <ListItemText  primary="Materiais" style={{color: "#022235"}}/></ListItem></a>
      

//             <a href="/"><ListItem button >
//       <ListItemIcon> </ListItemIcon>
//             <ListItemText  primary="Lojas" style={{color: "#022235"}}/></ListItem></a>
//       </List>
//     </div>
//   );

//   return (
//     <div style={{backgroundColor:"pink"}}>
//       {['left', ].map((anchor) => (
//         <React.Fragment key={anchor}>
          
//           <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
//             {list(anchor)}
//           </Drawer>
//           <AppBar position="sticky">
//          <div>
//          <Toolbar>
//         <IconButton
//           edge="start"
//           className={classes.menuButton}
//               color="inherit"
//               aria-label="open drawer"
//               onClick={toggleDrawer(anchor, true)}
//             >
//               <MenuIcon />
//             </IconButton>
          
//           <div className={classes.search}>
//             <div className={classes.searchIcon}>
              
//             </div>
//             <InputBase
//               placeholder="&nbsp;&nbsp;Pesquisar"
//               style={{backgroundColor: "white", borderRadius: "20px",fontColor: "#022235", opacity: "0.4"}}
//               classes={{
//                 root: classes.inputRoot,
//                 input: classes.inputInput,
//               }}
              
//               inputProps={{ 'aria-label': 'search' }}
//               id="input"
//             />
//           </div><SearchIcon type="submit"/>
//           <div className={classes.grow} />
//           <div className="iconsheaderMobile">
          
            
//             <a href="/login" style={{color: "#fff"}}><IconButton
//               edge="end"
//               aria-label="account of current user"
              
//               aria-haspopup="true"
            
//               color="inherit"
//             >
//               <AccountCircle />
//             </IconButton></a>
//           </div>
//           <div className={classes.sectionMobile}>
            
//           </div>
//         </Toolbar>
//         </div>
//       </AppBar>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }