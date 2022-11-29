import React from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function IconLabelButtons() {
    return (
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" startIcon={<SendIcon />} href='/Admin/UpdateNews/EditNews'>
          Edit this News element
        </Button>
      </Stack>
    );
  }