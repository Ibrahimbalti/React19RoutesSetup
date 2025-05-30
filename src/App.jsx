// src/App.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
