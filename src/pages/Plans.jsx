import React, { useContext } from 'react'
import { AuthContext } from '~/context/authProvider'

const Plans = () => {
  const { user } = useContext(AuthContext)
  return (
    <section className="plans">
      <div className="plans_content">
        <h2 className="plans_content_titulo">
          {user?.name} ¿Para quién deseas cotizar?
        </h2>
        <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
        <div className="plans_details">
          <div className="plan_item">Para mi</div>
          <div className="plan_item">Para alguien más</div>
        </div>
      </div>
    </section>
  )
}

export default Plans
