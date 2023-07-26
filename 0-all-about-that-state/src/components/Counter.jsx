import React, { useState } from "react"

function Counter() {
	const [count, setCount] = useState(0)
	const [user, setUser] = useState({ name: "Flo", age: 0 })

	const handleDecrement = () => {
		setCount(count - 1)
	}

	const handleName = (event) => {
		// console.log(event)
		const newName = event.target.value
		console.log(newName)
		// const newUser = {
		// 	name: newName,
		// 	age: user.age,
		// }
		// setUser(newUser)
		setUser({ ...user, name: newName })
	}

	const handleAge = (event) => {
		const newAge = event.target.value
		setUser({ ...user, age: newAge })
	}

	console.log(count)
	// console.log(user)
	/**
	 * ! console.log(count)
	 */
	return (
		<div>
			<h2>{count}</h2>
			<div>
				<button
					onClick={() => {
						// setCount(count + 1)
						// setCount(count + 1)
						setCount((currentCount) => {
							return currentCount + 1
						})
						setCount((currentCount) => {
							return currentCount + 1
						})
					}}>
					Increment
				</button>
				<button onClick={handleDecrement}>Decrement</button>
			</div>

			<p>
				User {user.name} is {user.age}y.o
			</p>

			<input placeholder="Name:" type="text" onChange={handleName} />
			<div>
				<input placeholder="Age:" type="number" onChange={handleAge} />
			</div>
		</div>
	)
}

export default Counter

// const dog = { name: "Iro", age: 2, race: "Dalmatian" }

// const { name, race } = dog
// console.log(name, race)
