import React, { useContext } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { commonServices } from '~/services'
import { ENDPOINTS } from '~/constants/endpoints'
import { AuthContext } from '~/context/authProvider'

const schema = yup.object().shape({
  tipoDocumento: yup.string().required('Seleccione un tipo de documento'),
  nroDocumento: yup
    .string()
    .required('Ingrese el número de documento')
    .matches(/^\d+$/, 'Debe ser un número válido'),
  celular: yup
    .string()
    .required('Ingrese el número de celular')
    .matches(/^\d+$/, 'Debe ser un número válido')
    .min(9, 'El número de celular debe tener al menos 9 dígitos')
    .max(15, 'El número de celular no debe exceder los 15 dígitos'),
  termscc: yup
    .boolean()
    .oneOf([true], 'Debe aceptar los términos y condiciones'),
  termscc2: yup
    .boolean()
    .oneOf([true], 'Debe aceptar la política de comunicaciones comerciales'),
})

const FormLogin = () => {
  const { setUser, setBusy, setAuthenticated } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    console.log(data)
    setBusy(true)
    try {
      const userData = await commonServices.getData(ENDPOINTS.USER)
      console.log(userData)
      setUser(userData)
      setBusy(false)
      setAuthenticated(true)
    } catch (error) {
      setAuthenticated(false)
      console.error('Error en las solicitudes:', error)
    }
  }

  return (
    <form className="form_login" onSubmit={handleSubmit(onSubmit)}>
      <div className="form_login_container_input">
        <div className="input_field select">
          <select
            className="customSelect"
            name=""
            id=""
            {...register('tipoDocumento')}
          >
            <option value="DNI">DNI</option>
            <option value="CE">CE</option>
          </select>
        </div>
        <div className="input-custom">
          <div className="input_field">
            <input
              id="nroDocumento"
              type="text"
              {...register('nroDocumento')}
            />
            <label htmlFor="nroDocumento">Nro. de documento</label>
          </div>
        </div>
      </div>
      <p className="error_msg">{errors.nroDocumento?.message}</p>
      <div className="form_login_container_input">
        <div className="input-custom">
          <div className="input_field br-full">
            <input id="celular" type="text" {...register('celular')} />
            <label htmlFor="celular">Celular</label>
          </div>
          <p className="error_msg">{errors.celular?.message}</p>
        </div>
      </div>

      <div className="form_login_container_checkbox">
        <div className="container-checkbox checkbox">
          <input
            type="checkbox"
            id="termscc"
            name="termscc"
            {...register('termscc')}
          />
          <div className="contents">
            <label htmlFor="termscc"></label>
            <p>Acepto la Política de Privacidad</p>
          </div>
        </div>
        <p className="error_msg">{errors.termscc?.message}</p>
      </div>

      <div className="form_login_container_checkbox">
        <div className="container-checkbox checkbox">
          <input
            type="checkbox"
            id="termscc2"
            name="termscc2"
            {...register('termscc2')}
          />
          <div className="contents">
            <label htmlFor="termscc2"></label>
            <p>Acepto la Política Comunicaciones Comerciales.</p>
          </div>
        </div>
      </div>
      <p className="error_msg">{errors.termscc2?.message}</p>

      <div className="tcc">
        <small>Aplican Términos y Condiciones.</small>
      </div>

      <button className="btn-hero mt-24" type="submit">
        Cotiza aquí
      </button>
    </form>
  )
}

export default FormLogin
