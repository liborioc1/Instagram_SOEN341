import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './SignUpBox.css'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: '#e6b3ae',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),

  },
  submit: {
    margin: theme.spacing(3, 0, 1),
  },
}));

const style = {
  color: '#f5f5f5',
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e6b3ae',
    },
    secondary: {
      main: '#858585',
    },
  },
});

export default function SignUp(props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <Container className = "boxColor" component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={props.handleSignUp} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                inputProps={{
                  'data-testid': 'username'
                }}
                name="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                inputProps={{
                  'data-testid': 'email'
                }}
                name="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                name="password"
                inputProps={{
                  'data-testid': 'password'
                }}
                label="Password"
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={style}
            aria-label="signUp"
          >
            Sign Up
          </Button>
          <Grid container>
            <div className = "textHyperlink">
                Already have an Account?
            </div>
              <Link to = "/" className = "signInHyperlink"> Sign In</Link>
            </Grid>
        </form>
      </div>
    </Container>
    </ThemeProvider>
  );
}


