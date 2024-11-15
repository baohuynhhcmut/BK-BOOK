import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ModalEdit from '../Modal Edit';
import DeleteModal from '../Modal delete';

const options = [
  'Sửa',
  'Xóa',
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

//   Edit
  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => {
    setOpenEdit(true)
    handleClose()
  };
  const handleCloseEdit = () => setOpenEdit(false);

// End edit
    const [openDeleted, setOpenDeleted] = React.useState(false);
    const handleOpenDelete = () => {
        setOpenDeleted(true)
        handleClose()
    };
    const handleCloseDelete = () => setOpenDeleted(false);
// Remove


// End remove
  return (
    <div>
        
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          },
        }}
      >
        <MenuItem onClick={handleOpenEdit}>
          <ListItemIcon>
            <EditNoteIcon fontSize="small"  sx={{ color: 'blue' }} />
          </ListItemIcon>
          <ListItemText>Sửa</ListItemText>
          
        </MenuItem>
        <MenuItem onClick={handleOpenDelete}>
          <ListItemIcon>
            <DeleteIcon fontSize="small"  sx={{ color: 'red' }} />
          </ListItemIcon>
          <ListItemText>Xóa</ListItemText>
        </MenuItem>
      </Menu>
      
      <ModalEdit open={openEdit}  onClose={handleCloseEdit} />
      <DeleteModal open={openDeleted} onClose={handleCloseDelete} onDelete={handleOpenDelete} /> 
    </div>
  );
}
