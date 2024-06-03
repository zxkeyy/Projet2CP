import { Flex } from "@chakra-ui/react";
import useUserData from "../../Hooks/useUserData";
import SideBar from "./Components/SideBar";
import { Outlet, useNavigate } from "react-router-dom";
const DashBoardPage = () => {
  const { data: userData } = useUserData();
  const navigate = useNavigate();
  
  if (userData?.role !== "admin") {
    navigate("/Login");
  }

  return (
    <Flex maxHeight={window.innerHeight} height={window.innerHeight} maxWidth={"100%"} bgColor={"#F3F3F3"}>
      <SideBar />
      <Outlet />
    </Flex>
  );
};

export default DashBoardPage;
