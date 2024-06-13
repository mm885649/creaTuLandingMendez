import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <itemListContainer title="Deportem" />
      <navBar />
    </ChakraProvider>
  );
}

export default App;
