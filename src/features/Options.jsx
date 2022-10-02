import { ChevronDownIcon } from "@chakra-ui/icons";
import {
	Button,
	Flex,
	Menu,
	MenuButton,
	MenuDivider,
	MenuGroup,
	MenuItem,
	MenuItemOption,
	MenuList,
	MenuOptionGroup,
	Text,
	Tooltip,
} from "@chakra-ui/react";

import { FaCloudDownloadAlt, FaSave } from "react-icons/fa";
const Options = () => {
	return (
		<Flex justifyContent={"space-between"} background={"gray.300"} p={2} borderRadius={5} mb={5}>
			<Menu>
				<MenuButton as={Button} rightIcon={<ChevronDownIcon />} leftIcon={<FaSave />} size="xs">
					Save
				</MenuButton>

				<MenuList>
					<MenuItem fontSize="sm">Save to Cloud</MenuItem>
					<MenuItem fontSize="sm">Download to Computer</MenuItem>
				</MenuList>
			</Menu>
			<Menu>
				<MenuButton as={Button} rightIcon={<ChevronDownIcon />} leftIcon={<FaCloudDownloadAlt />} size="xs">
					Load
				</MenuButton>
				<MenuList>
					<MenuItem fontSize="sm">Load to Cloud</MenuItem>
					<MenuItem fontSize="sm">Upload from Computer</MenuItem>
				</MenuList>
			</Menu>
			<Tooltip label="Download an MP3 of your project" placement={"top"}>
				<Button size="xs">MP3</Button>
			</Tooltip>
			<Tooltip label="Record your own audio to play alongside your project" placement={"top"}>
				<Button size="xs">Record</Button>
			</Tooltip>
		</Flex>
	);
};

export default Options;
