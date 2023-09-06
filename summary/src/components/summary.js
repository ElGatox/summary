import React from "react";
import Card from "@/components/card";
import { Box, Text, Flex, Button } from "@chakra-ui/react";

const Summary = ({ info }) => {
  return (
    <Flex
      flexDirection={["column", null, null, "column"]}
      borderTopRightRadius={[null, null, null, "3xl"]}
      borderBottomRightRadius={[null, null, null, "3xl"]}
      textAlign="center"
      w={[null, null, null, "400px"]}
      boxShadow={[null, null, null, "lg"]}
      justifyContent="center"
      alignItems="center"
      gap={["", null, null, "2"]}
    >
      <Text mt="3" mb="3" w="20rem" textAlign="start" fontSize="15" as="b">
        Summary
      </Text>
      <Box mt={[null, null, null, "5"]}>
        {info.map((card, i) => (
          <Box key={i}>
            <Card
              icon={card.icon}
              category={card.category}
              score={card.score}
              color={card.color}
            />
          </Box>
        ))}
      </Box>
      <Button
        borderRadius="2xl"
        h={["12", null, null, "14"]}
        w={["20rem", null, null, "21rem"]}
        _hover={{
          border: "1px solid ",
          background: "white",
          color: "blue.900",
        }}
        color="white"
        bg="blue.900"
        size="sm"
      >
        Continue
      </Button>
    </Flex>
  );
};

export default Summary;
