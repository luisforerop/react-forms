import React, { useState, ChangeEvent, FormEvent } from 'react'

const RegisterForm = () => {
	const [dataForm, setDataForm] = useState({
		name: '', email: '', password: '', confirmationPassword: ''
	})

	const { confirmationPassword, email, name, password, } = dataForm

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setDataForm(prev => ({
			...prev,
			[e.target.id]: e.target.value
		}))
	}

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		
	}

	return (
		<div>
			<form action="" onSubmit={submitHandler}>
				<input onChange={changeHandler} id='name' value={name} type="text" placeholder='Name' />
				<input onChange={changeHandler} id='email' value={email} type="email" placeholder='Email' />
				<input onChange={changeHandler} id='password' value={password} type="password" placeholder='Password' />
				<input onChange={changeHandler} id='confirmationPassword' value={confirmationPassword} type="password" placeholder='Repeat password' />
			</form>
		</div>
	)
}

export default RegisterForm