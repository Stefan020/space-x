import { Container, AppBar, Typography } from '@mui/material';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import useStyles from './styles';
import Home from './pages/Home';
import Rocket from './pages/Rocket';

const App = () => {

  const classes = useStyles();

  return (
    <Router>
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center"><Link className={classes.link} to='/'> SpaceX</Link></Typography>
        </AppBar>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path={`/rocket/:id`} component={Rocket} exact/>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
