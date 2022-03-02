import React from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextInput from '../../src/components/TextInput'

const validationSchema = Yup.object({
	name: Yup.string().max(15, '15 o menos').min(2, 'Más de 2').required('Requerido'),
	email: Yup.string().email('Debe ser un email válido').required('Requerido'),
	password: Yup.string().min(6, 'Mínimo 6 caracteres').required('Requerido'),
	repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Requerido'),
	terms: Yup.boolean().isTrue('Debe aceptar términos y condiciones'),
})

const initialValues = {
	name: '',
	email: '',
	password: '',
	repeatPassword: '',
	terms: false,
}

const onSubmit = (values: any) => console.log(values)

const Form = () => {

	const formikProps = { initialValues, onSubmit, validationSchema }
	return (
		<div>
			<Formik {...formikProps} >
				{(formik) => (
					<form style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '400px', alignItems: 'center' }} >
						<TextInput  name='name' />
						<TextInput  name='email' type='email' />
						<TextInput  name='password' type='password' />
						<TextInput  name='repeatPassword' label='Repeat password' type='password' />

						<label>
							<Field type="checkbox" name='terms' />
							Términos y condiciones
						</label>
						<ErrorMessage name='terms' component='span' />

						<button type='submit'>Submit</button>
						<button type='button' onClick={formik.handleReset} >Reset</button>
					</form>
				)}
			</Formik>


		</div>
	)
}

export default Form