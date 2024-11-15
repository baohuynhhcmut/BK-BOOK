
import React from 'react';
import { useState } from 'react';
import "./index.css"
import LongMenu from '../../components/Ellipsis';
import { Button, Box } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PanToolIcon from '@mui/icons-material/PanTool';
import ModalAdd from '../../components/Modal add';

const Book = () => {
    
    const [openAdd, setOpenAdd] = useState(false);

    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd = () => setOpenAdd(false);

    return (
        <div className='table-book'>
            <div class="p-6 bg-white rounded-lg table-border">
                <div className='table-header flex justify-between'>
                    <div>
                        <h2 class="text-xl font-semibold ">Danh Sách Sách</h2>
                        <Button
                            variant="contained"
                            color="success"
                            startIcon={<AddCircleOutlineIcon sx={{ color: 'white' }} />}
                            endIcon={<PanToolIcon sx={{ color: 'black' }} />}
                            sx={{ borderRadius: 10 }}
                            size="small"
                            onClick={handleOpenAdd}
                            >
                            Thêm Sách
                        </Button>
                        <ModalAdd open={openAdd} onClose={handleCloseAdd} />
                    </div>
                    <ul className='flex'>
                        <li className='mr-6'>
                            <i class="fa-solid fa-arrow-up-wide-short mr-2"></i>
                            <span className='text-black text-sm'>Sort</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-filter mr-2"></i>
                            <span className='text-black text-sm'>Filter</span>
                        </li>
                    </ul>
                </div>

                <div class="overflow-x-auto">
                    <table class="min-w-full">
                        <thead>
                            <tr>
                                <th class="px-4 py-2 border-b font-semibold text-left ">Mã Sách</th>
                                <th class="px-4 py-2 border-b font-semibold text-left ">Tên Sách</th>
                                <th class="px-4 py-2 border-b font-semibold text-left ">Nhà Xuất Bản</th>
                                <th class="px-4 py-2 border-b font-semibold text-left ">Tác Giả</th>
                                <th class="px-4 py-2 border-b font-semibold text-left ">Giá</th>
                                <th class="px-4 py-2 border-b font-semibold text-left ">Mô tả</th>
                                <th class="px-4 py-2 border-b"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="hover:bg-gray-50">
                                <td class="px-4 py-6 border-b text-gray-800">8935250707640</td>
                                <td class="px-4 py-6 border-b text-gray-800">Sword Art Online Progressive Vol 7</td>
                                <td class="px-4 py-6 border-b text-gray-800">IPM, Hà Nội</td>
                                <td class="px-4 py-6 border-b text-gray-800">REKI KAWAHARA</td>
                                <td class="px-4 py-6 border-b text-gray-800">120000</td>
                                <td class="px-4 py-6 border-b text-gray-800">Dễ thấy Sword Art Online có không gian kể...</td>
                                <td class="px-4 py-6 border-b text-gray-800 text-right">
                                    <LongMenu />
                                </td>
                            </tr>
                                <tr class="hover:bg-gray-50">
                                <td class="px-4 py-6 border-b text-gray-800">8935250707641</td>
                                <td class="px-4 py-6 border-b text-gray-800">Sword Art Online Progressive Vol 8</td>
                                <td class="px-4 py-6 border-b text-gray-800">IPM, Hà Nội</td>
                                <td class="px-4 py-6 border-b text-gray-800">REKI KAWAHARA</td>
                                <td class="px-4 py-6 border-b text-gray-800">125000</td>
                                <td class="px-4 py-6 border-b text-gray-800">Dễ thấy Sword Art Online có không gian kể...</td>
                                <td class="px-4 py-6 border-b text-gray-800 text-right">
                                    <LongMenu />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div class="flex items-center justify-end mt-4 ">
                    
                    <div class="flex space-x-2 items-center">
                        <div className='flex mr-10'>
                            <span>Dòng mỗi trang</span>
                            <div className='mx-1'>
                                <span class="pr-1 text-black">8</span>
                                <i class="fa-solid fa-caret-down"></i>
                            </div>
                        </div>
                        <span class="text-gray-500">1-8 of 1240</span>
                        <button class="px-2 py-1 text-sm font-semibold text-blue-600">❮</button>
                        <button class="px-2 py-1 text-sm font-semibold text-blue-600">❯</button>
                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default Book;
