import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Loan from "./pages/Loan";
import Accounts from "./pages/Accounts";
import Apply from "./pages/Apply";
import Mortgages from "./pages/Mortgages";
import Banking from "./pages/Banking";
import Allloan from "./pages/Allloan";
import Allservices from "./pages/Allservices";
import MyProfile from "./pages/MyProfile";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyProfiles from "./components/Myprofile/MyProfiles";
import MyAccount from "./components/MyAccount/MyAccount";
import UserLoans from "./components/userLoans/UserLoans";
import Users from "./components/user/Users";
import Alluserloans from "./components/Allluserloans/Alluserloans";
import RequireAuth from "./utilities/RequireAuth";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/loan' element={<Loan></Loan>} />
        <Route path="/apply" element={<Apply></Apply>} />
        <Route path="/services" element={<Allservices></Allservices>} />

        <Route path="/dashboard" element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>} />
          <Route path="transactions" element={<MyAccount></MyAccount>} />
          <Route path="loans" element={<UserLoans></UserLoans>} />
          <Route path="users" element={<Users></Users>} />
          <Route path="allloans" element={<Alluserloans></Alluserloans>} />
          <Route path="myprofile" element={<MyProfiles></MyProfiles>} />
        </Route>

        <Route path="/mortgages" element={<Mortgages></Mortgages>} />
        <Route path="/account" element={<Accounts></Accounts>} />
        <Route path="/allloan" element={<Allloan></Allloan>} />
        <Route path="/banking" element={<Banking></Banking>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='/login' element={<Login></Login>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
