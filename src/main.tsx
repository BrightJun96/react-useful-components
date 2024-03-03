import ReactDOM from "react-dom/client";
import App from "./App";
import {RouterProvider} from "react-router-dom";
import router from "./router/Router";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router}/>);
