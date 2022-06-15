import { Box } from "@chakra-ui/react";
import Image from "next/image";

import MotionBox from "lib/components/motion/Box";

const SomeImage = () => {
  return (
    <Box>
      <MotionBox
        animate={{ y: 20, scale: 0.97 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        marginY={8}
        maxWidth={[240, 320]}
        marginX="auto"
      >
        <Image
          src="/dev.svg"
          width={400}
          height={400}
          alt="Pessoa Programando"
        />
      </MotionBox>

      {/* <Flex marginY={4} justifyContent="center" alignItems="center">
        <HelperImage src={`/nextjs-icon-${colorMode}.svg`} label="NextJS" />
        <HelperImage src="/chakra-ui-logomark-colored.svg" label="Chakra UI" />
        <HelperImage src="/ts-logo-512.svg" label="TypeScript" />
      </Flex> */}
    </Box>
  );
};

export default SomeImage;
