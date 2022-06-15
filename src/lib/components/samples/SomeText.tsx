import {
  Box,
  Grid,
  Heading,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";

import { getCurrentDayTime } from "../../helpers/getTime";

const SomeText = () => {
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "sm",
  });

  return (
    <Grid gap={2}>
      <Heading as="h2" fontSize={{ base: "lg", sm: "3xl" }}>
        {getCurrentDayTime()}, estranho!
      </Heading>

      <Box
        backgroundColor={colorMode === "light" ? "gray.200" : "gray.500"}
        padding={4}
        borderRadius={4}
      >
        <Box fontSize={textSize}>Eu desenvolvo aplicações web e mobile.</Box>
      </Box>
    </Grid>
  );
};

export default SomeText;
