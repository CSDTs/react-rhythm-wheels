import { Box } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import SoundPalette from "./features/SoundPalette";
import SoundTile from "./features/SoundTile";
import SimpleSidebar from "./layout";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<SimpleSidebar></SimpleSidebar>
		</>
	);
}

export default App;
