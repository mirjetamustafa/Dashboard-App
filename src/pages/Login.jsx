import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
  Checkbox,
  FormGroup,
} from '@mui/material'
import { FcGoogle } from 'react-icons/fc'
import { BiLogoFacebookCircle } from 'react-icons/bi'
import { FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { SignInAPI } from '../actions'
import { Navigate } from 'react-router-dom'

const Login = (props) => {
  return (
    <Grid
      sx={{
        display: 'flex',
        justifyContent: 'center',

        mt: 9,
      }}
    >
      {props.user && <Navigate to="/" />}
      <Paper
        elevation={2}
        sx={{ width: { xs: '85%', md: '40%' }, textAlign: 'center', p: 2 }}
      >
        <Typography variant="h6">Sign in</Typography>
        <Typography variant="body2" color="gray">
          Welcome user, please sign in to continue
        </Typography>
        <FormControl sx={{ mt: 3, width: '70%' }}>
          <TextField label="Email Address" type="email" />
        </FormControl>
        <FormControl sx={{ mt: 2, width: '70%' }}>
          <TextField label="Password" type="password" />
        </FormControl>
        <Box
          sx={{
            mt: 2,
            width: '84%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
            sx={{ color: 'gray', ml: { xs: 0, md: 10 } }}
          />
          <Box sx={{ mt: 1 }}>
            <Link to={''} style={{ color: '#1e88e5' }}>
              Forgot your password
            </Link>
          </Box>
        </Box>
        <FormControl sx={{ mt: 2, width: '70%' }}>
          <Button variant="contained">Login</Button>
        </FormControl>
        <Box sx={{ my: 2, width: '100%' }}>
          <Link href="#" style={{ color: '#1e88e5' }}>
            Sign up
          </Link>
        </Box>

        <Divider sx={{ color: 'gray', my: 5 }}>or</Divider>

        <FormControl sx={{ width: '70%' }}>
          <Button
            onClick={() => props.signIn()}
            variant="outlined"
            startIcon={<FcGoogle />}
          >
            Sign in with Google
          </Button>
        </FormControl>

        <FormControl sx={{ mt: 2, width: '70%' }}>
          <Button
            variant="outlined"
            startIcon={<BiLogoFacebookCircle sx={{ color: 'blue' }} />}
          >
            Sign in with Facebook
          </Button>
        </FormControl>

        <FormControl sx={{ mt: 2, mb: 5, width: '70%' }}>
          <Button
            variant="outlined"
            startIcon={<FaLinkedin sx={{ color: 'blue' }} />}
          >
            Sign in with Linkedin
          </Button>
        </FormControl>
      </Paper>
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  }
}

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(SignInAPI()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
