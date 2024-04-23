import { Box } from "@chakra-ui/react";
import Hero from "./Components/Hero";
import Panel1 from "./Components/Panel1";
import Panel2 from "./Components/Panel2";
import Panel3 from "./Components/Panel3";
import Panel4 from "./Components/Panel4";
import Panel5 from "./Components/Panel5";
import Panel6 from "./Components/Panel6";
import Panel7 from "./Components/Panel7";
import Panel8 from "./Components/Panel8";
import Panel9 from "./Components/Panel9";
import Banner from "../../assets/Banner.png"

const HomePage = () => {
  return (
    <Box bgColor={"bg.500"}>
      <Hero />
      <Panel1 />
      <Panel2 />
      <Panel3 />
      <Panel4 />
      <Panel5 />
      <Panel6 />
      <Panel7 />
      <Panel8 />
      <Panel9 />
      <Box bgImage={Banner} aspectRatio={1920 / 150} width={"100%"} bgSize={"100%"}/>
    </Box>
  );
};

export default HomePage;
