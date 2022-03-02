import React from 'react'
import { FormikErrors, useFormik } from 'formik'

type FormValues = {
	firstName: string;
	lastName: string;
	email: string;
}

const Form = () => {
	const validate = ({ email, firstName, lastName, }: FormValues) => {
		const errors: FormikErrors<FormValues> = {}
		if (!firstName) errors.firstName = 'Required'
		else if (firstName.length >= 15) errors.firstName = 'Must be 15 characteres or less'

		if (!lastName) errors.lastName = 'Required'
		else if (lastName.length >= 15) errors.lastName = 'Must be 15 characteres or less'

		if (!email) errors.email = 'Required'
		else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
			errors.email = 'Invalid email address';
		}

		return errors
	}
	const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
		},
		onSubmit: (values) => console.log(values),
		validate
	})
	return (
		<div>
			<form action="" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '400px', alignItems: 'center' }} >
				<label htmlFor="firstName">firstName</label>
				<input onBlur={handleBlur} onChange={handleChange} value={values.firstName} type="text" name='firstName' />
				{touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

				<label htmlFor="lastName">lastName</label>
				<input onBlur={handleBlur} onChange={handleChange} value={values.lastName} type="text" name='lastName' />
				{touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

				<label htmlFor="email">email</label>
				<input onBlur={handleBlur} onChange={handleChange} value={values.email} type="text" name='email' />
				{touched.email && errors.email && <span>{errors.email}</span>}

				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}

export default Form