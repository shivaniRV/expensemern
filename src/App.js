import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
           
            <ProtectedRoutes>
              <HomePage />
            </ProtectedRoutes>
            
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export function ProtectedRoutes(props) {
  if (localStorage.getItem("user")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default App;