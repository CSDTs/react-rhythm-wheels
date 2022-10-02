import { AspectRatio, Box, Flex, Text } from "@chakra-ui/react";
import "./SoundTile.scss";

export default function SoundTile({ maxWidth, icon, name, sound }) {
	const audio = new Audio(sound);
	const handleOnClick = () => {
		audio.play();
	};

	return (
		<Flex w={maxWidth ?? "60px"} flexDirection={"column"}>
			<AspectRatio w={maxWidth ?? "60px"} ratio={1}>
				<div className={"sound_tile"} onClick={handleOnClick}>
					<div className="sound-tile-base">
						<img src={icon ?? "sprites/rest.png"} alt="Sound tile" className="sound-tile-image" />
					</div>
				</div>
			</AspectRatio>

			<Text textAlign={"center"} fontSize={"sm"} fontWeight={"500"} color={"gray.800"}>
				{name}
			</Text>
		</Flex>
	);
}
