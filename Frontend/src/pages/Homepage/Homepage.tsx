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

const HomePage = () => {
  //useEffect(() => {
    //try {
      //const res = axios.get('http://localhost:5000/user/pro', { withCredentials: true });
    //} catch (error) {
      //console.log(error);
    //}
  //}, []);
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
    </Box>
  );
};

export default HomePage;
