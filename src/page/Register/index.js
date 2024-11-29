import React from 'react';
import image from "../../Assert/images/background 1.png"
import { user } from '../../data/user';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = React.useState({
        username: '',
        password: ''
    });
    const [isLoading, setIsLoading] = React.useState(false);

    // Hàm xử lý thay đổi giá trị của các trường nhập liệu
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const isValidUser = user.some(
            (u) => u.username === formData.username && u.password === formData.password
        );

        setTimeout(() => {
            if (isValidUser) {
                navigate('/book/view'); // Điều hướng đến /book/view
            } else {
                alert('Tên tài khoản hoặc mật khẩu không đúng!');
            }
            setIsLoading(false); // Tắt trạng thái tải
        }, 1000); // Mô phỏng thời gian xử lý 1 giây
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl">
                <div className="lg:grid lg:grid-cols-2 lg:gap-4">
                    {/* Image */}
                    <div className="shrink-0 max-w-md lg:max-w-lg">
                        <img className="w-full dark:hidden" src={image} alt="Background" />
                    </div>

                    {/* Form login */}
                    <div className="mt-10 sm:mt-10 lg:mt-16">
                        <div className="flex flex-col items-center justify-center px-6  mx-auto md:h-screen lg:py-0">
                            <a href="#" className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
                                <img className="w-16 h-16 mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmMiyNm0-af3xQ5CPPwsVinkTyy0oc_MsvxQ&s" alt="logo" />
                            </a>
                            <div className="w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                <div className="space-y-4 sm:p-8">
                                    
                                    <p class="text-gray-500 dark:text-gray-400 mt-5">
                                        Welcome back!
                                    </p>
                                    <h1
                                        class="text-2xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
                                        style={{color:"#000"}}
                                    >
                                        Register Account
                                    </h1>
                                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                        <div>
                                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên tài khoản</label>
                                            <input 
                                                type="username" 
                                                name="username" 
                                                id="username" 
                                                onChange={handleChange} 
                                                value={formData.username} 
                                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                                placeholder="Nhập tài khoản" 
                                                required 
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
                                            <input 
                                                type="email" 
                                                name="email" 
                                                id="email" 
                                                onChange={handleChange} 
                                                value={formData.username} 
                                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                                placeholder="Nhập email" 
                                                required 
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu</label>
                                            <input 
                                                type="password" 
                                                name="password" 
                                                id="password" 
                                                onChange={handleChange} 
                                                value={formData.password} 
                                                placeholder="Nhập mật khẩu" 
                                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                                required 
                                            />
                                        </div>
                                        <div className="flex flex-col justify-end">
                                            <button 
                                                type="button" 
                                                className="text-white bg-orange-500 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                            >
                                                Đăng kí
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
