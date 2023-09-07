import { Stack, Flex } from "@chakra-ui/react";
import Summary from "@/components/summary";
import data from "../data/data.json";
import ScoreTotal from "@/components/scoreTotal";
import { info } from "@/data/info";

export default function Home() {
  return (
    <Flex height="100vh" alignItems="center" className="home">
      <Stack
        spacing="-28px"
        flexDirection={["column", null, "row"]}
        w={[null, null, null, "full"]}
        justifyContent="center"
      >
        <ScoreTotal />
        <Summary info={info} />
      </Stack>
    </Flex>
  );
}
