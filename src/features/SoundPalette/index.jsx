import { Box, Flex, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useState } from "react";

import { catalog, libraries } from "../../data/catalog";
import SoundTile from "../SoundTile";
export default function SoundPalette() {
	const [sounds, setSounds] = useState(null);
	const [library, setLibrary] = useState("HipHop");

	const handleLibraryChange = (e) => {
		setLibrary(e.target.value);
	};

	return (
		<Box w={"250px"}>
			<FormControl>
				<FormLabel>Sound Genres</FormLabel>
				<Select placeholder="Select a genre" onChange={handleLibraryChange}>
					{Object.keys(libraries).map((type) => (
						<option>{type}</option>
					))}
				</Select>
			</FormControl>
			<Flex
				flexWrap={"wrap"}
				justifyContent={"space-between"}
				background={"gray.300"}
				p={2}
				borderRadius={5}
				shadow={"base"}>
				{libraries[library].map((type) => (
					<SoundTile icon={catalog[type].icon} key={type} sound={catalog[type].url} name={catalog[type].name} />
				))}
			</Flex>
		</Box>
	);
}
