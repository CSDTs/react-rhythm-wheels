import { Box, Flex, keyframes } from "@chakra-ui/react";

import { isValidMotionProp, motion } from "framer-motion";
import { useEffect } from "react";
import SoundTile from "./SoundTile";
import "./Wheel.scss";
export default function Wheel() {
	const circles = 16;
	const width = 500;

	const CreateWheels = () => {
		const arr = [];

		let angle = 360 - 90,
			dangle = 360 / circles;
		for (let i = 0; i < circles; ++i) {
			angle += dangle;
			arr.push(
				<Box className={`circle `} transform={`rotate(${angle}deg) translate(${width / 2}px) rotate(-${angle}deg)`}>
					<SoundTile />
				</Box>
			);
		}

		return arr;
	};
	const animationKeyframes = keyframes`
    0% { transform: scale(1) rotate(0); border-radius: 20%; }
    25% { transform: scale(1) rotate(0); border-radius: 20%; }
    50% { transform: scale(1) rotate(270deg); border-radius: 50%; }
    75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
    100% { transform: scale(1) rotate(0); border-radius: 20%; }
  `;

	const animation = `${animationKeyframes} 2s ease-in-out `;

	return (
		<Flex>
			<Box as={motion.div} animation={animation} className="ciclegraph" w={`${500}px`}>
				{CreateWheels()}
			</Box>
			{/* <div className="ciclegraph">
				<Box className="circle"></Box>
				<Box className="circle"></Box>
				<Box className="circle"></Box>
				<Box className="circle"></Box>
				<Box className="circle"></Box>
				<Box className="circle"></Box>
				<Box className="circle"></Box>
				<Box className="circle"></Box>
				<Box className="circle"></Box>
				<Box className="circle"></Box>
			</div> */}
		</Flex>
	);
}
