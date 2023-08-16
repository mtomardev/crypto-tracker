import * as React from 'react';
import { FacebookShareButton,FacebookIcon,
         WhatsappShareButton,WhatsappIcon,
         TwitterShareButton,TwitterIcon,
         TelegramShareButton, TelegramIcon,
         LinkedinShareButton,LinkedinIcon,
        EmailShareButton,EmailIcon} from 'react-share';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


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

export default function ShareComponent({open,handleClose}) {
  

  return (
    <div className='modal-flex'>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
        </Box>
      </Modal>
    </div>
  );
}