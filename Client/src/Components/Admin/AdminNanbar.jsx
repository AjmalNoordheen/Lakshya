import React, { useState } from 'react';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function AdminNanbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <div className="header bg-[#14191f] flex justify-between items-center text-white text-center">
        <h1 className="font-bold">EVENTS</h1>
        <div className="h-10 w-10 bg-purple-800 mr-5 flex items-center justify-center rounded-full">
          <IconButton onClick={() => setShowNav(true)}>
            <FormatListBulletedIcon />
          </IconButton>
        </div>
        {showNav && (
          <div
            className={`flex flex-col fixed right-0 top-0 h-screen w-[20%] justify-center items-center bg-[#2d3846] shadow-lg shadow-slate-350`}
          >
            <div className="h-10 top-2 right-2 absolute w-10 bg-purple-800 flex items-center justify-center rounded-full">
              <IconButton onClick={() => setShowNav(false)}>
                <CloseIcon className="font-bold" />
              </IconButton>
            </div>
            <div className="h-2/5 flex flex-col justify-around">
              <p className="cursor-pointer border-b-0 hover:transform hover:scale-105 hover:duration-700 hover:border-b-2 text-black">
                Home
              </p>
              <p className="cursor-pointer border-b-0 hover:transform hover:scale-105 hover:duration-700 hover:border-b-2 text-black">
                Home
              </p>
              <p className="cursor-pointer border-b-0 hover:transform hover:scale-105 hover:duration-700 hover:border-b-2 text-black">
                Home
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AdminNanbar;
