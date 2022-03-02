import React from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextInput from '../../src/components/TextInput'

const validationSchema = Yup.object({
	firstName: Yup.string().max(15, '15 o menos')['min'](4).required('Requerido'),
	lastName: Yup.string().max(15, '15 o menos').required('Requerido'),
	email: Yup.string().email('Debe ser un email válido').required('Requerido'),
	terms: Yup.boolean().isTrue('Debe aceptar términos y condiciones'),
	jobType: Yup.string().required().notOneOf([''], 'Selecciona algo')
})

const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
	terms: false,
	jobType: '',
}

const onSubmit = (values: any) => console.log(values)

const Form = () => {

	const formikProps = { initialValues, onSubmit, validationSchema }
	return (
		<div>
			<Formik {...formikProps} >
				{(formik) => (
					<form style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '400px', alignItems: 'center' }} >
						<label htmlFor="firstName">firstName</label>
						<Field type="text" name='firstName' />
						<ErrorMessage name='firstName' component='span' />

						<TextInput  name='firstName' />

						<label htmlFor="lastName">lastName</label>
						<Field type="text" name='lastName' />
						<ErrorMessage name='lastName' component='span' />

						<label htmlFor="email">email</label>
						<Field type="text" name='email' />
						<ErrorMessage name='email' component='span' />

						<label htmlFor="jobType">Job type</label>
						<Field as='select' name='jobType'>
							<option value=''>Select an option...</option>
							<option value='Frontend'>Frontend</option>
							<option value='Backend'>Backend</option>
							<option value='Fullstack'>Fullstack</option>
							<option value='DevOps'>DevOps</option>
						</Field>
						<ErrorMessage name='jobType' component='span' />

						<label>
							<Field type="checkbox" name='terms' />
							Términos y condiciones
						</label>
						<ErrorMessage name='terms' component='span' />

						<button type='submit'>Submit</button>
					</form>
				)}
			</Formik>


		</div>
	)
}

export default Form