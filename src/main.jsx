import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import TodoWrapper from './Components/TodoWrapper'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from './Components/Container';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container/>
    <ToastContainer />
  </StrictMode>
);
