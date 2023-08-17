import React, {useState} from 'react';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import Switch from '@mui/material/Switch';
import { FacebookShareButton,FacebookIcon,
    WhatsappShareButton,WhatsappIcon,
    TwitterShareButton,TwitterIcon,
    TelegramShareButton, TelegramIcon,
    LinkedinShareButton,LinkedinIcon,
   EmailShareButton,EmailIcon} from 'react-share';
import Button from '../../Common/Button';


      
   const style = {  
    display: "flex",
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: '1rem',
    width: '30%',
    margin: '30px auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '1rem',
    boxShadow: 24,
    p: 4,
  };


  

export default function ShareDrawer() {
    const [open, setOpen] = useState(false) 

  return (
    <div>
      <IconButton onClick={()=> setOpen(true)}>
              <Button text={"Share"} outline={true}  />
          </IconButton>
      
          <Drawer
            anchor={"bottom"}
            open={open}
            onClose={()=> setOpen(false)}
          >

            <div className="share-drawer-div" sx={style}>
                
            <FacebookShareButton
           url='https://crypto-tracker-dashboard-w.netlify.app/'>
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
          <WhatsappShareButton
           url='https://crypto-tracker-dashboard-w.netlify.app/'>
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>
          <TelegramShareButton
           url='https://crypto-tracker-dashboard-w.netlify.app/'>
            <TelegramIcon size={40} round={true} />
          </TelegramShareButton>
          <LinkedinShareButton
           url='https://crypto-tracker-dashboard-w.netlify.app/'>
            <LinkedinIcon size={40} round={true} />
          </LinkedinShareButton>
          <EmailShareButton
           url='https://crypto-tracker-dashboard-w.netlify.app/'>
            <EmailIcon size={40} round={true} />
          </EmailShareButton>
          <TwitterShareButton
           url='https://crypto-tracker-dashboard-w.netlify.app/'>
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>   
            </div>        

          </Drawer>
    </div>
  );
}