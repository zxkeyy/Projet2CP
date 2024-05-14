import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
const colors = {
  brand: {
    500: "#009688",
  },
  bg: {
    500: "#F1F0EC",
    100: "#f5f5f5",
  },
};

const queryClient = new QueryClient();
const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router}/>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
