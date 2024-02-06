import React from 'react'
import imgHome from '~/assets/img/imgHome.png'
import FormLogin from '~/components/FormLogin'

const Home = () => {
  return (
    <div className='home'>
        <section className='home_hero_container-left'>
            <div className="img-wrapper">
                <div className='imgHome'></div>
            </div>
        </section>
        <section className='home_hero_container-right'>
            <div className="header_hero">
                <div className="header_hero_title">
                    <span className='header_hero_title_tagPromo'>Seguro Salud Flexible</span>
                    <h1 className='header_hero_title_text-title'>Creado para ti y tu familia</h1>
                </div>
            <div className="img-wrapper">
                <div className='imgHome'></div>
            </div>
            </div>
            <p className='home_hero_text-p'>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>

            <FormLogin />
        </section>
    </div>
  )
}

export default Home