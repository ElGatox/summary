import React from "react";
import Card from "@/components/card";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { info } from "@/data/info";

const summary = () => {
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
    >
      <Text fontSize="17">Summary</Text>
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
      <Button borderRadius="2xl" h="12" w="72" colorScheme="blue" size="sm">
        Continue
      </Button>
    </Flex>
  );
};

export default summary;
