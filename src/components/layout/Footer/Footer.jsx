import React from 'react'
import Logo from '~/assets/img/Logo_footer.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <img src={Logo} alt='logo' />
        </div>
        <hr />
        <div>
            © 2023 RIMAC Seguros y Reaseguros.
        </div>
    </div>
  )
}

export default Footer