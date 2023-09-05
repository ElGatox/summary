import { Box, Text, Center, Flex } from "@chakra-ui/react";

const scoreTotal = () => {
  return (
    <Box
      borderTopRadius={[null, null, null, "3xl"]}
      borderBottomRadius="3xl"
      borderColor="red"
      textAlign="center"
      p="5"
      color="white"
      w={[null, null, null, "400px"]}
      h={["300px", null, null, "500px"]}
      bgGradient="linear(hsl(252, 100%, 67%), hsl(241, 81%, 54%))"
    >
      <Center>
        <Text> Your Result</Text>
      </Center>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        m="0 auto"
        w={["120px", null, null, "200px"]}
        h={["120px", null, null, "200px"]}
        borderRadius="full"
        mt={["5", null, null, "20"]}
        textAlign="center"
        bgGradient="linear(hsl(241, 75%, 60%), hsl(252, 100%, 61%) )"
      >
        <Text as="b" fontSize={["50", null, null, "80"]}>
          76
        </Text>
        <Text color="grey" fontSize={["smaller", null, null, "20"]}>
          of 100
        </Text>
      </Flex>
      <Box mt="5" textAlign="center">
        <Text fontSize={[null, null, null, "30"]} as="b">
          Great
        </Text>
        <Text mt="1" px="12" fontSize="small">
          {" "}
          You scored higher than 65% of the people who have taken these tests.
        </Text>
      </Box>
    </Box>
  );
};

export default scoreTotal;
