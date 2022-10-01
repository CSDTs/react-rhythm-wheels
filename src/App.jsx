import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import SimpleSidebar from "./layout";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<SimpleSidebar />
		</>
	);
}

export default App;
