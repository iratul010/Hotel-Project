import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          try {
            const response = await fetch('http://localhost:5001/hotels');
            if (!response.ok) {
              throw new Error('Failed to fetch booking data');
            }
            const booking = await response.json();
            return { booking };
          } catch (error) {
            console.error("Error loading booking data:", error);
            throw error;  // Re-throw to handle in the UI
          }
        },
      },
    ],
  },
]);

export default router;
 