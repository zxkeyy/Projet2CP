import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import CartContextProvider from "./services/CartContextProvider.tsx";

const colors = {
  brand: {
    500: "#009688",
  },
  bg: {
    500: "#F1F0EC",
    100: "#f5f5f5",
  },
};

const theme = extendTheme({ colors });

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CartContextProvider>
          <RouterProvider router={router} />
        </CartContextProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
