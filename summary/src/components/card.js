import { Box, Flex, Text, Image } from "@chakra-ui/react";

const CardInfo = ({ category, score, icon, color }) => {
  return (
    <Box h={["60px", null, null, "75px"]}>
      <Flex
        alignItems="center"
        w={["20rem", null, null, "21rem"]}
        h={["9", null, null, "12"]}
        textAlign="center"
        justifyContent="space-between"
        bgColor={color.bgColor}
        borderRadius="1xl"
        px="2.5"
      >
        <Flex gap="2">
          <Image bgColor={color.bgColor} src={icon.src} />{" "}
          <Text
            fontSize={["15", null, null, null]}
            as="b"
            textColor={color.textColor}
          >
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
