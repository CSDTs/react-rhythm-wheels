import {
	Avatar,
	Box,
	CloseButton,
	Drawer,
	DrawerContent,
	Flex,
	HStack,
	Icon,
	IconButton,
	Image,
	Link,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	Text,
	useColorModeValue,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";
import React from "react";

import { FiBell, FiChevronDown, FiCompass, FiHome, FiMenu, FiSettings, FiStar, FiTrendingUp } from "react-icons/fi";
import Options from "../features/Options";

import SoundPalette from "../features/SoundPalette";
import StatusUpdate from "../features/StatusUpdate";

export default function SidebarWithHeader({ children }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
			<SidebarContent onClose={() => onClose} display={{ base: "none", md: "block" }} />
			<Drawer
				autoFocus={false}
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
				size="full">
				<DrawerContent>
					<SidebarContent onClose={onClose} />
				</DrawerContent>
			</Drawer>

			<MobileNav onOpen={onOpen} />
			<Box ml={{ base: 0, md: 80 }} p="4">
				{children}
			</Box>
		</Box>
	);
}

const SidebarContent = ({ onClose, ...rest }) => {
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
				<StatusUpdate />
				<Options />
				<SoundPalette />
			</Box>
		</Box>
	);
};

const NavItem = ({ icon, children, ...rest }) => {
	return (
		<Link href="#" style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
			<Flex
				align="center"
				p="4"
				mx="4"
				borderRadius="lg"
				role="group"
				cursor="pointer"
				_hover={{
					bg: "cyan.400",
					color: "white",
				}}
				{...rest}>
				{icon && (
					<Icon
						mr="4"
						fontSize="16"
						_groupHover={{
							color: "white",
						}}
						as={icon}
					/>
				)}
				{children}
			</Flex>
		</Link>
	);
};

const MobileNav = ({ onOpen, ...rest }) => {
	const linkColor = useColorModeValue("gray.600", "gray.200");
	const linkHoverColor = useColorModeValue("gray.800", "white");
	const popoverContentBgColor = useColorModeValue("white", "gray.800");

	return (
		<Flex
			ml={{ base: 0, md: 80 }}
			px={{ base: 4, md: 4 }}
			height="20"
			alignItems="center"
			bg={useColorModeValue("white", "gray.900")}
			borderBottomWidth="1px"
			borderBottomColor={useColorModeValue("gray.200", "gray.700")}
			justifyContent={{ base: "space-between" }}
			{...rest}>
			<IconButton
				display={{ base: "flex", md: "none" }}
				onClick={onOpen}
				variant="outline"
				aria-label="open menu"
				icon={<FiMenu />}
			/>

			<Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }} verticalAlign={"middle"}>
				<Flex>
					<Link href={"https://www.nsf.gov/"}>
						<Image src={"nsf.webp"} width={"40px"} height={"40px"} />
					</Link>
					<Link href={"/"}>
						<Image src={"logo.webp"} width={"100pz"} height={"40px"} />
					</Link>
				</Flex>
				<Flex justify={"left"}>
					<Link
						p={2}
						href={"#"}
						fontSize={"sm"}
						fontWeight={500}
						color={linkColor}
						_hover={{
							textDecoration: "none",
							color: linkHoverColor,
						}}>
						Projects
					</Link>
					<Link
						p={2}
						href={"#"}
						fontSize={"sm"}
						fontWeight={500}
						color={linkColor}
						_hover={{
							textDecoration: "none",
							color: linkHoverColor,
						}}>
						News
					</Link>
					<Link
						p={2}
						href={"#"}
						fontSize={"sm"}
						fontWeight={500}
						color={linkColor}
						_hover={{
							textDecoration: "none",
							color: linkHoverColor,
						}}>
						Publications
					</Link>
					<Link
						p={2}
						href={"#"}
						fontSize={"sm"}
						fontWeight={500}
						color={linkColor}
						_hover={{
							textDecoration: "none",
							color: linkHoverColor,
						}}>
						About
					</Link>
				</Flex>
			</Flex>

			<HStack spacing={{ base: "0", md: "6" }}>
				<IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
				<Flex alignItems={"center"}>
					<Menu>
						<MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: "none" }}>
							<HStack>
								<Avatar
									size={"sm"}
									src={
										"https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
									}
								/>
								<VStack display={{ base: "none", md: "flex" }} alignItems="flex-start" spacing="1px" ml="2">
									<Text fontSize="sm">localtest</Text>
								</VStack>
								<Box display={{ base: "none", md: "flex" }}>
									<FiChevronDown />
								</Box>
							</HStack>
						</MenuButton>
						<MenuList
							bg={useColorModeValue("white", "gray.900")}
							borderColor={useColorModeValue("gray.200", "gray.700")}>
							<MenuItem>My Projects</MenuItem>
							<MenuItem>My Classrooms</MenuItem>
							<MenuItem>My Workbooks</MenuItem>
							<MenuDivider />
							<MenuItem>Sign out</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</HStack>
		</Flex>
	);
};
