import React from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // boxShadow: 24,
  // p: 4,
  borderRadius: 2,
  // textAlign: 'center'
};

export default function ModalAdd({ open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-add-title"
      aria-describedby="modal-add-description"
    >
      <Box sx={style}>
         <div class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6 space-y-6">
            <div class="flex justify-between items-center border-b pb-4">
              <h2 class="text-xl font-semibold">Thêm sách</h2>
              <button class="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 9.293l4.646-4.647a1 1 0 011.414 1.414L11.414 10l4.646 4.646a1 1 0 01-1.414 1.414L10 11.414l-4.646 4.646a1 1 0 01-1.414-1.414L8.586 10 3.94 5.354a1 1 0 111.414-1.414L10 9.293z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>

            <form class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700">Tên sách</label>
                <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Nhà xuất bản</label>
                <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Tác giả</label>
                <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Giá</label>
                <input type="number" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Mô tả</label>
                <textarea rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
              </div>
            </form>


            <div class="flex justify-end space-x-4">
              <button class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">Hủy</button>
              <button class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Thêm</button>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
