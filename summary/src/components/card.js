import { Box, Flex, Text, Image } from "@chakra-ui/react";
import reaction from "../assets/images/icon-reaction.svg";

const CardInfo = ({ category, score, icon, color }) => {
  console.log(icon);
  return (
    <Box h={["70px", null, null, "75px"]} mt={[null, null, null, "15px"]}>
      <Flex
        alignItems="center"
        w="72"
        h="12"
        textAlign="center"
        justifyContent="space-between"
        bgColor={color.bgColor}
        borderRadius="3xl"
        p="2.5"
      >
        <Flex gap="2">
          <Image bgColor={color.bgColor} src={icon.src} />{" "}
          <Text as="b" textColor={color.textColor}>
            {category}{" "}
          </Text>
        </Flex>
        <Flex>
          <Text as="b">{score} </Text>
          <Text>/100</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CardInfo;
