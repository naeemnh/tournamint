import { useContext } from "react";
import { connect } from 'react-redux'
import { ColorModeContext, tokens } from "../theme";

import { Avatar, Box, Button, IconButton, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";

import LightModeOulinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOulinedIcon from '@mui/icons-material/DarkModeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import GoogleIcon from '@mui/icons-material/Google';
// import logo from '../img/logo-01.png'

const Profile = ({ auth }) => {
  switch (auth) {
    case null:
      return;
    case false:
      return (<Button href="/auth/google" variant="contained" color="secondary" startIcon={<GoogleIcon />}>Login With Google</Button>)
    default:
      return (
        <IconButton>
          {/* {auth.profilePicture ? (<Avatar src={auth.profilePicture} alt={auth.name} />) : <PersonOutlinedIcon />} */}
          <PersonOutlinedIcon />
        </IconButton>
      )
  }
}

const Topbar = ({ auth }) => {
  console.log(auth)
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display='flex' justifyContent='space-between' p={2}>
      <Box display='flex'>
        <IconButton>
          <EmojiEventsOutlinedIcon />
        </IconButton>
        <Box display='flex' backgroundColor={colors.primary[400]} borderRadius='20px'>
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search Tournament..." />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
      <Box display='flex'>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOulinedIcon />
          ) : (
            <LightModeOulinedIcon />
          )}
        </IconButton>
        <Profile auth={auth} />
      </Box>
    </Box>
  )
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(Topbar);
