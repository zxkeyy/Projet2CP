import { Box, Show } from "@chakra-ui/react";
import Panel1 from "./Components/Panel1";
import Panel2 from "./Components/Panel2";
import Panel3 from "./Components/Panel3";
import Panel4 from "./Components/Panel4";
import Panel5 from "./Components/Panel5";
import Panel6 from "./Components/Panel6";

const ServicesPage = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Box bgColor={"bg.500"}>
        <Panel1 />
        <Panel2 />
        
        <Panel4 />
        <Show above="md">
          <Panel5 />
        </Show>
        <Panel6 />
      </Box>
    </>
  );
};

export default ServicesPage;
