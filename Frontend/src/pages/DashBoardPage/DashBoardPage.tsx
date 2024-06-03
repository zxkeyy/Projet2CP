import { Flex } from "@chakra-ui/react";
import useUserData from "../../Hooks/useUserData";
import SideBar from "./Components/SideBar";
import { Outlet } from "react-router-dom";
const DashBoardPage = () => {
  const { data: userData } = useUserData();

  console.log(userData);
  console.log(userData?.role);
  if (userData?.role !== "admin") {
    return <div>Not Authorized</div>;
  }

  return (
    <Flex maxHeight={window.innerHeight} height={window.innerHeight} maxWidth={"100%"} bgColor={"#F3F3F3"}>
      <SideBar />
      <Outlet />
    </Flex>
  );
};

export default DashBoardPage;
