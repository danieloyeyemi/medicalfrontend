import { Box, Grid, styled, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import hero from '../assets/d3.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MedicationIcon from '@mui/icons-material/Medication';
import HistoryIcon from '@mui/icons-material/History';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const LI = styled('li')({
    listStyleType: 'none',
    width:'100%'
})
const Mystyle = styled(NavLink)({
    backgroundColor:'white',
    "&:hover":{
        backgroundColor: 'rgb(237, 240, 250)',
        borderLeft: 'thick solid ',
    },
    borderRadius:'1rem',
})

const LeftBar = ({fullName}) => {
    return (
        <>
            <Grid container sx={{ border: 1, borderColor: '#efefef',height:'65rem'}}>
                <Grid item lg={12} sx={{ pt: { sm: "1rem", md: '3rem' }, pb: { sm: "1rem", md: '3rem' }, display: 'grid', alignItems: 'center', justifyContent: 'center',position:'fixed',left:'6.7vw' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <Box component='img' src={hero} sx={{ width: '60px', height: '70px', border: 1, borderRadius: '1rem' }} />
                    </Box>
                    <Typography variant="body1" color="initial" sx={{ display: 'flex', justifyContent: 'center', width: '100%', fontWeight: 500, fontSize: { sm: '1rem', md: '1.5rem' }, mt: { sm: '.5rem', md: '1rem' } }}>
                        {fullName}
                    </Typography>
                    <Typography variant="body1" color="initial" sx={{ display: 'flex', justifyContent: 'center', width: '100%', fontWeight: 500, fontSize: { sm: '1rem', md: '1.1rem' } }}>
                        Patient
                    </Typography>
                </Grid>
                <Grid item lg={12} sx={{pl:2,pr:2, position:'fixed',top:'36vh',width:'18%'}}>
                    <Typography variant="body1" color="initial" sx={{ fontWeight: 500, fontSize: { sm: '1rem', md: '1.4rem' },ml:2 }}>
                        Main
                    </Typography>
                    <Mystyle to="" style={{ textDecoration: "none", color: 'black', display: 'flex', alignItems: 'center' }} sx={{mt:1.3}}>
                        <DashboardCustomizeIcon sx={{ color: 'rgb(54,58,98)', fontWeight: 500, fontSize: '2.5rem' ,ml:1}} />
                        <LI sx={{ p: '1.1rem' }}>Dashboard</LI>
                    </Mystyle>
                    <Mystyle to="" style={{ textDecoration: "none", color: 'black', display: 'flex', alignItems: 'center' }} sx={{mt:1.3}}>
                        <LibraryBooksIcon sx={{ color: 'rgb(54,58,98)', fontWeight: 500, fontSize: '2.5rem' ,ml:1}} />
                        <LI sx={{ p: '1.1rem' }}>Appointments</LI>
                    </Mystyle>
                    <Mystyle to="" style={{ textDecoration: "none", color: 'black', display: 'flex', alignItems: 'center' }} sx={{mt:1.3}}>
                        <MedicationIcon sx={{ color: 'rgb(54,58,98)', fontWeight: 500, fontSize: '2.5rem' ,ml:1}} />
                        <LI sx={{ p: '1.1rem' }}>Prescription</LI>
                    </Mystyle>
                    <Mystyle to="" style={{ textDecoration: "none", color: 'black', display: 'flex', alignItems: 'center' }} sx={{mt:1.3}}>
                        <HistoryIcon sx={{ color: 'rgb(54,58,98)', fontWeight: 500, fontSize: '2.5rem' ,ml:1}} />
                        <LI sx={{ p: '1.1rem' }}>Medical Record</LI>
                    </Mystyle>
                    <Mystyle to="" style={{ textDecoration: "none", color: 'black', display: 'flex', alignItems: 'center' }} sx={{mt:1.3}}>
                        <AccountBalanceWalletIcon sx={{ color: 'rgb(54,58,98)', fontWeight: 500, fontSize: '2.5rem' ,ml:1}} />
                        <LI sx={{ p: '1.1rem' }}>Billing</LI>
                    </Mystyle>
                    <Mystyle to="/chat" style={{ textDecoration: "none", color: 'black', display: 'flex', alignItems: 'center' }} sx={{mt:1.3}}>
                        <ChatIcon sx={{ color: 'rgb(54,58,98)', fontWeight: 500, fontSize: '2.5rem' ,ml:1}} />
                        <LI sx={{ p: '1.1rem' }}>Chat</LI>
                    </Mystyle>
                    <Mystyle to="/settings" style={{ textDecoration: "none", color: 'black', display: 'flex', alignItems: 'center' }} sx={{mt:1.3}}>
                        <SettingsIcon sx={{ color: 'rgb(54,58,98)', fontWeight: 500, fontSize: '2.5rem' ,ml:1}} />
                        <LI sx={{ p: '1.1rem' }}>Settings</LI>
                    </Mystyle>
                    <Mystyle to="" style={{ textDecoration: "none", color: 'black', display: 'flex', alignItems: 'center' }} sx={{mt:1.3}}>
                        <LogoutIcon sx={{ color: 'rgb(54,58,98)', fontWeight: 500, fontSize: '2.5rem' ,ml:1}} />
                        <LI sx={{ p: '1.1rem'}}>Logout</LI>
                    </Mystyle>
                </Grid>
            </Grid>
        </>
    )
}

export default LeftBar