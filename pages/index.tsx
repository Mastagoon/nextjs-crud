import type { NextPage } from 'next'
import { useState } from 'react'

const Home: NextPage = () => {
	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [result, setResult] = useState<string>('')

	const handleSubmit = async () => {
		const url = "http://localhost:3000/api/auth"
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username,
				password
			})
		})
		const data = await response.json()
		setResult(data.status)
	}



	return (
		<>
			<div className="grid grid-cols-12">
				<div className="col-span-12 py-3 bg-[#7C007C] flex flex-row justify-between">
					<div className="mx-5 text-white">
						<h1 className="text-xl font-bold">LOGO</h1>
					</div>
					<ul className="flex flex-row justify-between mx-5 text-white">
						<li className="mx-2">login</li>
						<li className="mx-2">register</li>
					</ul>
				</div>
			</div>
			<div className="w-full grid grid-cols-12 align-center">
				<div className="col-span-4"></div>
				<div className="flex flex-col bg-[#e1e1e1] items-center my-5 col-span-4">
					<div className="text-xl font-bold text-red-500">{result}</div>
					<div className="text-xl font-bold">Signup</div>
					<hr />
					<label htmlFor="username">Username</label>
					<input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="p-1 w-80" />
					<label htmlFor="password">Password</label>
					<input value={password} onChange={e => setPassword(e.target.value)} type="password" className="p-1 w-80" />
					<button onClick={handleSubmit} className="p-2 my-3 text-white bg-blue-500 rounded-md hover:opacity-80">Register</button>
				</div>
				<div className="col-span-4"></div>
			</div>
		</>
	)
}

export default Home
