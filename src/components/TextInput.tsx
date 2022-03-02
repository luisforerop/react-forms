import React, { FC, Fragment } from 'react'
import { Field, ErrorMessage, useField } from 'formik'

type textInputProps = {
	name: string
	component?: string | React.ComponentType<{}>
	type?: 'text' | 'password' | 'email'
	label?: string
	id?: string
	placeholder?: string
}


const TextInput: FC<textInputProps> = (props) => {
	// Se podría usar useField, que retorna el field y el meta
	const { id, name, component = 'span', type = 'text', label, placeholder
	} = props
	const [field, meta] = useField(props)
	console.log(field);
	console.log(meta);
	return (
		<Fragment>
			<label htmlFor={id || name}>{label || name}</label>
			<Field type={type} name={name} placeholder={placeholder} />
			<ErrorMessage name={name} component={component} />
		</Fragment>
	)
}

export default TextInput