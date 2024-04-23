
import { Box } from "@chakra-ui/react";
import Panel1 from "./Components/Panel1";
import Panel2 from "./Components/Panel2";
import Panel3 from "./Components/Panel3";
import Panel4 from "./Components/Panel4";
import Panel5 from "../Homepage/Components/Panel4";
import Panel6 from "./Components/Panel6";
import Panel7 from "./Components/Panel7";
import Footer from "../../components/Footer";

const AboutUspage = () => {
    return(
        <Box bgColor={"bg.500"}>
            <Panel1 />
            <Panel2 />
            <Panel3 />
            <Panel4 />
            <Panel5 />
            <Panel6 />
            <Panel7 />
            <Footer />
        </Box>
    );
}
export default AboutUspage;