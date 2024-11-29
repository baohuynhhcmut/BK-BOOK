
import userimage from "../../Assert/images/User.png"  

import { Link } from "react-router-dom";

const HeaderUser = () => {
    return (
        <div>
            <div class="px-10">
                <div className="space-y-1 flex justify-between p-3 border-b header">
                    <div class="flex items-center space-x-2 text-color">
                        <i class="fa-solid fa-phone"></i>
                        <span class="text-lg text-color font-semibold	">+91 8374902234</span>
                    </div>
                    <div>
                        <ul class="flex space-x-4 text-color">
                            <li><i class="fa-brands fa-facebook text-xl"></i></li>
                            <li><i class="fa-brands fa-instagram text-xl"></i></li>
                            <li><i class="fa-brands fa-linkedin text-xl"></i></li>
                            <li><i class="fa-brands fa-twitter text-xl"></i></li>
                            <li><i class="fa-brands fa-blogger-b"></i></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex items-center	 justify-around mt-2">

                <img class="rounded-full h-20 w-20" src={userimage} alt="image description" />

                <div class="relative">
                    <input 
                        type="text" 
                        class="w-96 py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                        placeholder="Search..."
                    />
                    <i class="fa-solid fa-search absolute right-4 icon-search transform  text-gray-500"></i>
                </div>

                <div className="flex ">
                    <Link to="/login">
                        <i class="fa-regular fa-user mx-2"></i>
                        <span className="text-color font-bold text-sm">ĐĂNG NHẬP</span>
                    </Link>
                    <Link className="ml-3 border-l-2 border-solid border-[#173F5F]" to="/register">
                        <i class="fa-solid fa-lock mx-2"></i>
                        <span className="text-color font-bold text-sm">ĐĂNG KÍ</span>
                    </Link>
                </div>
            </div>


            <div className="">
                <ul className="text-white flex justify-center text-sm bg-blue-900 py-2">
                    <li className="py-2 px-5 font-bold first:border-l-0 last:border-r-0 border-l-2 border-r-2 border-solid border-[#fff]">HOME</li>
                    <li className="py-2 px-5 border-1-2 border-r-2 border-solid border-[#fff]">ABOUT US</li>
                    <li className="py-2  px-5 border-1-2 border-r-2 border-solid border-[#fff]">BOOKS</li>
                    <li className="py-2 px-5 border-1-2 border-r-2 border-solid border-[#fff]">NEW RELEASE</li>
                    <li className="py-2 px-5 border-1-2 border-r-2 border-solid border-[#fff]">CONTACT US</li>
                    <li className="py-2 px-5 first:border-l-0 last:border-r-0 border-l-1 border-r-2 border-solid border-[#fff]">BLOG</li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderUser;
