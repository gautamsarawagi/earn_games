import React from 'react'
import {Typography,Modal} from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '10px',
};

function PlayLearn() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Stay tuned!
          </Typography>
        </div>
      </Modal>
    </div>
  )
}

export default PlayLearn