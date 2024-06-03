import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
<<<<<<< HEAD
import { QueryClient, QueryClientProvider } from "react-query";

=======
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
>>>>>>> 6616365 (adding google sign in front and back)
const colors = {
  brand: {
    500: "#009688",
  },
  bg: {
    500: "#F1F0EC",
    100: "#f5f5f5",
  },
};

<<<<<<< HEAD
const theme = extendTheme({ colors });

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>
=======
const queryClient = new QueryClient();
const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router}/>
      </ChakraProvider>
    </QueryClientProvider>
>>>>>>> 6616365 (adding google sign in front and back)
  </React.StrictMode>
);
