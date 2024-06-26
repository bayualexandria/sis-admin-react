// import logo from "./assets/images/png/logo-pendidikan.png";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Cookies from "js-cookie";
import Register from "./pages/auth/Register";
import Profile from "./pages/profile/Profile";
import Index from "./pages/siswa/Index";
import GetById from "./pages/siswa/GetById";
import Guru from "./pages/guru/Guru";
import UpdateDataGuru from "./pages/guru/UpdateDataGuru";

function App() {
  // function statusUser() {
  //   let authentication = Cookies.get("authentication");
  //   const auth = authentication.split(",");
  //   console.log(auth[2]);

  //   return auth[2];
  // }
  return (
    <>
      <Routes>
        {/* Start UnAuthorization */}
        <Route
          path="/login"
          element={
            <UnAthenticated>
              <Login />
            </UnAthenticated>
          }
        />

        <Route
          path="/register"
          element={
            <UnAthenticated>
              <Register />
            </UnAthenticated>
          }
        />
        {/* End UnAuthorization */}

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        {/* data siswa */}
        <Route
          path="/siswa"
          element={
            <PrivateRoute>
              <Index />
            </PrivateRoute>
          }
        />
        <Route
          path="/siswa/:nis"
          element={
            <PrivateRoute>
              <GetById />
            </PrivateRoute>
          }
        />
        {/* data siswa */}
        {/* data guru */}
        <Route
          path="/guru"
          element={
            <PrivateRoute>
              <Guru />
            </PrivateRoute>
          }
        />
         <Route
          path="/guru/:nip"
          element={
            <PrivateRoute>
              <UpdateDataGuru />
            </PrivateRoute>
          }
        />
        {/* data guru */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;

function PrivateRoute({ children }) {
  const isAuthenticated = Cookies.get("authentication");
  if (isAuthenticated) {
    return children;
  }
  return <Navigate to="/login" replace={true} />;
}

function UnAthenticated({ children }) {
  const isAuthenticated = Cookies.get("authentication");
  if (!isAuthenticated) {
    return children;
  }
  return <Navigate to="/" replace={true} />;
}
