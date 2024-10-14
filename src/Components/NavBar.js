// import React, {useContext} from 'react';
// import {Context} from "../index";



const NavBar = () => {
    // const {user} = useContext(Context)
    return ( 
            <div className="">
                <div className="flex justify-end mr-6 gap-3 py-2">
                     <img src="/images/Phone_icon.png" className="z-auto" alt="PHONE" />
                     <h1 className="text-grey font-semibold">062141414</h1>
                     <img src="/images/local_icon.svg" className="z-auto" alt="LOGO" />
                     <h1 className="text-grey font-semibold">str. Pan Halippa 12/ 1</h1>
                </div>
                <div className="bg-line_menu h-[80px] flex justify-between bg-cover" >
                     <img src="/images/log.svg" className="h-28 w-28 mt-[-30px] ml-6" alt="LOG"></img>
                     <div className="flex rounded-3xl h-[38px] w-[714px] my-5 bg-white ">
                       <input className=" ml-4 w-[665px]  placeholder-black outline-none" placeholder="Căutare"></input>
                       <img src="/images/Vector.png" className='w-5 h-5 my-[9px] mx-4 ' alt="VECTOR"></img>
                     </div>
                     <div className='flex my-4 mr-[-260px]'>
                      <img src="/images/basket.png" className='w-8 h-8 mt-2' alt="BASCET"></img>
                      <div className="ml-6">
                      <h1 className='text-white'>RO</h1>
                      <h1>RU</h1>    
                      </div>                      
                     </div>
                     <div></div>
                </div>
            </div>
    );
};

export default NavBar;