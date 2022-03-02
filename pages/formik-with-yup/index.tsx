import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
	firstName: Yup.string().max(15, '15 o menos').required('Requerido'),
	lastName: Yup.string().max(15, '15 o menos').required('Requerido'),
	email: Yup.string().email('Debe ser un email válido').required('Requerido'),
})

const Form = () => {
	const { handleSubmit, errors, touched, getFieldProps } = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
		},
		onSubmit: (values) => console.log(values),
		validationSchema
	})
	return (
		<div>
			<form action="" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '400px', alignItems: 'center' }} >
				<label htmlFor="firstName">firstName</label>
				<input type="text" { ...getFieldProps('firstName') } />
				{touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

				<label htmlFor="lastName">lastName</label>
				<input type="text" { ...getFieldProps('lastName') } />
				{touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

				<label htmlFor="email">email</label>
				<input type="text" { ...getFieldProps('email') } />
				{touched.email && errors.email && <span>{errors.email}</span>}

				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}

export default Form