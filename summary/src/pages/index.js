import { Stack, Flex } from "@chakra-ui/react";
import Summary from "@/components/summary";
import data from "../data/data.json";
import ScoreTotal from "@/components/scoreTotal";

export default function Home() {
  return (
    <Flex height="100vh" alignItems="center" className="home">
      <Stack
        flexDirection={["column", null, "row"]}
        w={[null, null, null, "full"]}
        justifyContent="center"
      >
        <ScoreTotal />
        <Summary />
      </Stack>
    </Flex>
  );
}
