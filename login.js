import React from 'react';
import './style.css';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function App() {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        marginTop: '20%',
        overflow: 'hidden',
      }}
    >
      {/* breakpoint */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'black' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ mb: 4 }}>
          Sign in
        </Typography>
        <TextField
          label="Email Address"
          required
          fullWidth
          id="email"
          autoComplete="email"
          /* autoFocus */
          margin="nomal"
          sx={{
            mb: 2,
          }}
        />
        <TextField
          label="Password"
          type="password"
          required
          fullWidth
          id="password"
          autoComplete="current-password"
          margin="nomal"
        />
        <FormControlLabel
          control={<Checkbox value="Remeber" color="default" />}
          label="Remeber me"
        />
        <Button
          type="submit"
          fullWidth
          style={{
            backgroundColor: 'black',
          }}
          variant="contained"
          sx={{
            mt: 3,
            mb: 1,
          }}
        >
          Sign in
        </Button>
        <Grid container>
          <Grid item xs>
            <Link
              sx={{
                textDecoration: 'none',
                color: 'black',
              }}
            >
              forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link
              sx={{
                textDecoration: 'none',
                color: 'black',
              }}
            >
              Sign up
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
