import { Box, CloseButton, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Options from "../features/Options";
import SoundPalette from "../features/SoundPalette";

const SidePanel = (onClose, ...rest) => {
	return (
		<Box
			transition="3s ease"
			bg={useColorModeValue("white", "gray.900")}
			borderRight="1px"
			borderRightColor={useColorModeValue("gray.200", "gray.700")}
			w={{ base: "full", md: 80 }}
			pos="fixed"
			h="full"
			{...rest}>
			<Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
				<Text fontSize="xl" fontFamily="monospace" fontWeight="bold">
					Rhythm Wheels
				</Text>
				<CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
			</Flex>

			<Box p={4}>
				<Options />
				<SoundPalette />
			</Box>
		</Box>
	);
};

export { SidePanel };
