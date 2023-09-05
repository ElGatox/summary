import { Inter } from "next/font/google";
import { Box, Text, Button, Stack, Flex } from "@chakra-ui/react";
import Summary from "@/components/summary";
import data from "../data/data.json";
import ScoreTotal from "@/components/scoreTotal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Flex height="100vh" alignItems="center" className="home">
      <Stack
        flexDirection={["column", null, "row"]}
        border=""
        w={[null, null, null, "full"]}
        justifyContent="center"
      >
        <ScoreTotal />
        <Summary />
      </Stack>
    </Flex>
  );
}
