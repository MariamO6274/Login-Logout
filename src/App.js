import Dashboard from "./components/Dashboard";
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Logout from "./components/Logout";

function App() {
  const isAuthenticatedUser = sessionStorage.getItem("isAuthenticated"); //for logout button/condotional rendering

  // incapsulated accesable routs in ProtectedRoutes
  // We'll create a <Route which won't have a path (just element)
  // and this element will be <Route element={<ProtectedRoutes />}> will close it after dashbord (the one we want to protect)
  return (
    <div>
      <Router>
        <Routes>
          {!isAuthenticatedUser ? ( <Route path="/" element={<LoginPage />} /> ) : (<Route path="/" element={<Logout />} />)}

          {/* <Route path="/" element={<LoginPage />} /> */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// When you nest component into another componenet it becomes child-parant relationship
// ProtectedRoutes is a parant of Dashboard component, but it doesn't render anything bc we don't have a path
// Dashboard is a chikd, so in Protected Routes we should have outlet for chikd

// Outlet component --> creats space for child (like we did in NavBar app)
