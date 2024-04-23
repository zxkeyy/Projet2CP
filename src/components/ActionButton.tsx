import { Button, ButtonProps } from "@chakra-ui/react";

interface Props extends ButtonProps {}

const ActionButton = (props: Props) => {
  return (
    <Button
      style={{ background: `linear-gradient(to right,#1F2247, #009688)` }}
      color={"white"}
      borderRadius={"0px"}
      {...props}
    ></Button>
  );
};

export default ActionButton;
