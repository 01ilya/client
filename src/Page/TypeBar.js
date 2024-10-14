import React from 'react';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '..';


const TypeBar = observer(() => {
    const {device} = useContext(Context)
return (
    <div className='bg-white rounded-xl w-[271px] h-[490px] leading-[21.6px] mb-6'>
   <ul className='mt-8'>
    {device.types.map(type => 
        <li key={type.id} className="border-black text-[18px] mx-8 pt-[14px]">
            {type.name}
        </li>
    )}
   </ul>
   </div>
);
});

export default TypeBar;