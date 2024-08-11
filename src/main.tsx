import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import Page404 from "./components/Page404.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CodeEditor from "./components/CodeEditor.tsx";
import Codingarena from "./components/Codingarena.tsx";
import Codingbattleground from "./components/Codingbattleground.tsx";
import HomePage from "./components/Homepage.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Profile from "./components/Profile.tsx";
import ProblemDescription from "./components/ProblemDescription.tsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/codingplayground",
        element: <CodeEditor />,
      },
      {
        path: "/codingarena",
        element: <Codingarena />,
      },
      {
        path: "/codingarena/problems/:pid",
        element: <ProblemDescription />,
      },
      {
        path: "/codingbattleground",
        element: <Codingbattleground />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId="304073217530-ftn21k2ih2qjqil3oalf13dmupqigudn.apps.googleusercontent.com">
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  </GoogleOAuthProvider>
);
