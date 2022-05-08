import { Box, Text, Image, Flex, Collapse, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <div>
      <main>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop="150px"
        >
          <Flex direction="column" marginRight="100px" padding="10px">
            <Text fontSize="25px" fontWeight="bold" color="#C769AA">
              HAPPY MOTHER'S DAY :D
            </Text>
            <Text
              fontSize="20px"
              fontWeight="semibold"
              color="#C769AA"
              marginTop="5px"
              marginBottom="20px"
            >
              The most perfect women, mothers ❤️
            </Text>
            <Collapse startingHeight={0} in={show}>
              <Text maxWidth="599px" color="#595F4F">
                They have the ability to hear the silence. Guess
                feelings. Finding the right word in uncertain times.
                Strengthen us when everything around us seems to crumble. Wisdom
                borrowed from the gods to protect and support us. Your
                existence is itself an act of love. Generate, care, nurture. Love,
                love, love... Love with an unconditional love that expects nothing in
                replacement. Unrestrained and unrestrained affection, Mother is an infinite being.
              </Text>
              <Text marginTop="10px" maxWidth="599px" color="#595F4F">
                Mom, you are simply the toughest mom ever! You
                manages to multiply itself in such a peculiar way, so attentive, so
                strong. Things like that are only up to people like
                you, Mother!
              </Text>
            </Collapse>
            <Button
              width="150px"
              marginTop="10px"
              onClick={handleToggle}
              backgroundColor="#C769AA"
              color="white"
              _hover={{ bg: "#D287BB" }}
            >
              Click here
            </Button>
          </Flex>
          <Image
            width="700px"
            height="700px"
            src="/mother.png"
            marginLeft="100px"
            padding="10px"
          />
        </Box>
      </main>
    </div>
  );
}
