import "./App.css"
import Counter from "./components/Counter"
import List from "./components/List"
import { useState } from "react"
function App() {
	const [showCounter, setShowCounter] = useState(true)

	const handleCounter = () => {
		setShowCounter(!showCounter)
	}
	return (
		<>
			<button onClick={handleCounter}>
				{showCounter ? "Hide" : "Show"} Counter
			</button>
			{/* {showCounter ? <Counter /> : ""} */}
			{showCounter && <Counter />}
			<List />
		</>
	)
}

export default App
