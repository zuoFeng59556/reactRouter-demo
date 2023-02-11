import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./router"; 

function RouteElement() {
  const element = useRoutes(routes);
  return element;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <RouteElement />
      </BrowserRouter>
    </>
  )
}
export default App
