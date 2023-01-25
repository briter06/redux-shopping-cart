import React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/material';

function ResultModal(props: any) {
  const { open, title, children, onCloseCallback } = props
  return (
    <Dialog onClose={() => onCloseCallback ? onCloseCallback() : {}} open={open}>
      <DialogTitle style={{textAlign: 'center', fontWeight: 'bold'}}>{title}</DialogTitle>
      <Box sx={{margin: 3}}>
        {children}
      </Box>
    </Dialog>
  );
}

export default ResultModal;
