import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

import {Paper,InputBase,IconButton,Button,Box,Modal,CircularProgress} from "@mui/material"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: 4,
};


function SearchBox() {

  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: {lg: 600,md: 400,sm: 300} }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search MY Nft"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton variant="contained" type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>

    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={style}>
        <CircularProgress />
        </div>
      </Modal>

    </div>
  )
}

export default SearchBox