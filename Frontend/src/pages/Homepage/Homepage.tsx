<<<<<<< HEAD
import { Box, Show } from "@chakra-ui/react";
import Hero from "./Components/Hero";
import { useEffect } from "react";
=======
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import axios from "../../../node_modules/axios/index";
import Hero from "./Components/Hero";
>>>>>>> 6616365 (adding google sign in front and back)
import Panel1 from "./Components/Panel1";
import Panel2 from "./Components/Panel2";
import Panel3 from "./Components/Panel3";
import Panel4 from "./Components/Panel4";
import Panel5 from "./Components/Panel5";
import Panel6 from "./Components/Panel6";
import Panel7 from "./Components/Panel7";
import Panel8 from "./Components/Panel8";
import Panel9 from "./Components/Panel9";
<<<<<<< HEAD
import axios from "axios";
const HomePage = () => {
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get("http://localhost:5000/auth/user", {
        withCredentials: true,
      });
      console.log(res.data);
    };
    fetchUser();
  }, []);
=======

const HomePage = () => {
  useEffect(() => {
    const fetchUser = async ()=>{
      const res = await axios.get("http://localhost:5000/auth/user",{ withCredentials: true })
      console.log(res.data)
  }
  fetchUser()
},[])
>>>>>>> 6616365 (adding google sign in front and back)
  return (
    <Box bgColor={"bg.500"}>
      <Hero />
      <Panel1 />
      <Panel2 />
<<<<<<< HEAD
      <Show above="md">
        <Panel3 />

=======
      <Panel3 />
>>>>>>> 6616365 (adding google sign in front and back)
      <Panel4 />
      <Panel5 />
      <Panel6 />
      <Panel7 />
      <Panel8 />
      <Panel9 />
<<<<<<< HEAD
      </Show>
=======
>>>>>>> 6616365 (adding google sign in front and back)
    </Box>
  );
};

export default HomePage;
