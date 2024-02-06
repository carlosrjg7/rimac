import React from "react";
import Logo from '~/assets/img/Logo.svg'
import Tlf from '~/assets/img/GlTelephoneSolid.svg'

const Header = () => {
  return (
    <div className='header d-flex flex-row w-100 justify-content-between align-items-center pl-0 pr-0'>
      <div className='logo col-6 col-md-4'>
        <img src={Logo} alt='logo' />
      </div>
      <div className='phone'>
        <span className="phone_text-regular d-none d-md-flex">¡Compra por este medio!</span>
        <img src={Tlf} alt="phone" />
        <b className="phone_text-Bold">(01) 411 6001</b>
      </div>
    </div>
  );
};

export default Header;
