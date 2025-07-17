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

import { SignUpWithEmail } from '../actions'
import { useState } from 'react'

const SignUp = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSignUp = () => {
    props
      .signUp(email, password)
      .then(() => {
        setSuccessMsg('You have successfully registered!')
        setErrorMsg('')
      })
      .catch((error) => {
        setSuccessMsg('')
        setErrorMsg('Registration failed: ', +error.message)
      })
  }

  return (
    <Grid
      sx={{
        display: 'flex',
        justifyContent: 'center',

        mt: 9,
      }}
    >
      <Paper
        elevation={2}
        sx={{ width: { xs: '85%', md: '40%' }, textAlign: 'center', p: 2 }}
      >
        <Typography variant="h6">Sign Up</Typography>
        <Typography variant="body2" color="gray">
          Create your account
        </Typography>
        <form>
          <FormControl sx={{ mt: 3, width: '70%' }}>
            <TextField label="Name" type="text" />
          </FormControl>
          {successMsg && (
            <Typography variant="body2" color="green">
              {successMsg}
            </Typography>
          )}
          {errorMsg && (
            <Typography variant="body2" color="red">
              {errorMsg}
            </Typography>
          )}

          <FormControl sx={{ mt: 3, width: '70%' }}>
            <TextField label="Lastname" type="text" />
          </FormControl>

          <FormControl sx={{ mt: 3, width: '70%' }}>
            <TextField
              label="Email Address"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl sx={{ mt: 2, width: '70%' }}>
            <TextField
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Box
            sx={{
              mt: 2,
              width: '84%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          ></Box>
          <FormControl sx={{ mt: 2, width: '70%' }}>
            <Button variant="contained" onClick={handleSignUp}>
              Sign Up
            </Button>
          </FormControl>
          <Box sx={{ my: 2, width: '100%' }}>
            <Link to={'/login'} style={{ color: '#1e88e5' }}>
              Sign in
            </Link>
          </Box>
        </form>

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
  signUp: (email, password) => {
    SignUpWithEmail(email, password)(dispatch)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
