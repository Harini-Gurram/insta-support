
import { Box, Button,Link, Stack, Typography, keyframes } from '@mui/material';
import {ExpandMoreSharp} from '@mui/icons-material'
import styled from '@emotion/styled';

const bottoms=['Meta','About','Blog','Jobs','Help','API','Privacy','Terms','Top Accounts','Locations','Instagram Lite','Contact Uploading & Non-Users','Meta Verified']
const imageAnimation = keyframes`
  0% { opacity: 1; }
  20% { opacity: 0; }
  80% { opacity: 0; }
  100% { opacity: 1; }
`;
const AnimatedImage = styled.img`
  position: absolute;
  top:51.8%;
  left:40.5%;
  transform: translate(-50%, -50%);
  opacity:0;
  width:36vh;
  height:76vh;
  animation: ${imageAnimation} 18s linear infinite;
`;
function App() {
  const clientId=1379077412944454
  const handleClick=(event)=>{
    
  window.location.href=`https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=https://insta-basic.vercel.app/&scope=user_profile,user_media&response_type=code`

    
  }
  return (
    <Stack direction='column'>
    <Stack direction='row' spacing={1}>
      <Box marginLeft='40vh' marginTop='10vh' sx={{
        backgroundImage:`url('https://www.secure.instagram.com/static/images/homepage/phones/home-phones-2x.png/cbc7174b4f05.png')`,
        backgroundSize:'contain',
        
        justifyContent:'center',
        alignItems:'cneter',
        width:'40vw',
        height:'90vh',
        backgroundRepeat:'no-repeat'
      }}>
       <AnimatedImage src="https://www.secure.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png"  style={{ animationDelay: '0s' }} />
      <AnimatedImage src="https://www.secure.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png"  style={{ animationDelay: '4s' }} />
      <AnimatedImage src="https://www.secure.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png"  style={{ animationDelay: '8s' }} />
      <AnimatedImage src="https://www.secure.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png"  style={{ animationDelay: '12s' }} />
    </Box>
      <Stack direction='column' spacing={0}>
        <Box component='span' sx={{backgroundColor:'rgba(var(--d87,255,255,255),1)',border:'1px solid lightgray',height:'40vh',width:'50vh',marginTop:'15vh'}}>
        <Stack direction='column' spacing={0} justifyContent='center' alignItems='center'>
          <img src="https://tse2.mm.bing.net/th/id/OIP.w7dyhWvuFT1Ly43XzKcehQHaFD?pid=ImgDet&rs=1" alt="instagram"width='80%'></img>
          <Button variant='contained'sx={{width:'80%',textTransform:'none'}} onClick={handleClick}>Log in</Button>
        </Stack>   
      </Box>
      <Box component='span'sx={{backgroundColor:'rgba(var(--d87,255,255,255),1)',border:'1px solid lightgray',height:'10vh',width:'50vh', marginLeft:'0vh',marginTop:'0.4rem'}}>
        <br/>
          <Typography variant='text' sx={{marginLeft:'4rem',fontSize:'14px'}} >Don't have an account? </Typography>
          
          <Link href="https://www.secure.instagram.com/accounts/emailsignup/" underline="none" target="nlacnk">Sign up</Link>
      </Box>
      <Stack direction='column' sx={{marginLeft:'8vh',marginTop:'1rem'}} spacing={2}>
          <Typography variant='text' sx={{fontSize:'14px',marginLeft:'5rem'}} gutterBottom>Get the app.</Typography>
          <Stack direction='row' spacing={2}>
                <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo"><img src="https://www.secure.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" width="110px" height="40px"/></a>
                <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D2A059572-C301-4EF5-80C0-99ADB8C13EC9%26utm_content%3Dlo%26utm_medium%3Dbadge"><img src="https://www.secure.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" width="110px" height="40px"/>
                </a>
          </Stack>
      </Stack> 
  </Stack>
  </Stack>
  <Stack marginTop='8rem' direction='row' columnGap='16px' marginLeft='40vh'>
        {bottoms.map((bottom,index)=>(
            <Link underline='hover' color='grey' fontSize='12px' key={index} sx={{'&: hover':{cursor:'pointer'}}}>{bottom}</Link>
        ))}
    </Stack>
    <Stack direction='row' columnGap='16px' alignItems='center' justifyContent='center' marginLeft='0vh' marginTop='1.2rem'>
        <Link fontSize='12px' underline="none" color='grey' endIcon={<ExpandMoreSharp/>}>English</Link>
        <Link fontSize='12px' underline="none" color='grey'>2023 Instagram from Meta</Link>
    </Stack> 
    <div style={{marginBottom:'2rem'}}/>    
  </Stack>
  );
}

export default App;
