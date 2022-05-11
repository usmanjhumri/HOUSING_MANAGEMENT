import { Route, Routes } from "react-router-dom";
import * as React from "react";
import Footer from './components/footer/Footer';
import Navbar from './components/header/NavBar';
import NotFound404 from './components/notFound/NotFound404';
import Login from './components/loginPage/Login';
import SignUp from "./components/signUpPage/SignUp";
import Home from "./components/homePage/Home";
import AllProperties from "./components/allProperties/AllProperties";

import Dashboard from './components/dashboard/Dashboard';
import AboutUs from "./components/aboutUs/AboutUs";
import ContactUs from "./components/contactUs/ContactUs";
import OrderPage from "./components/orderPage/OrderPage";
import CustomFooter from "./components/footer/CustomFooter";
import DefaultHome from "./components/dashboard/dashboardComponents/defaultHome/DefaultHome";
import Profile from "./components/dashboard/dashboardComponents/profile/Profile";
import ListNewProperty from "./components/dashboard/dashboardComponents/listedBidsProperties/ListedBidsProperties";
import ListedBidsProperties from "./components/dashboard/dashboardComponents/listedBidsProperties/ListedBidsProperties";
import { useDispatch, useSelector } from "react-redux";
import { allPropertiesLoader } from "./RTK/Reducers/Reducers";
import ListedProperties from "./components/dashboard/dashboardComponents/listedProperties/ListedProperties";

const App = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(allPropertiesLoader())
  }, [dispatch]);











  return (
    <div >
      <Routes>
        <Route path="/" element={<> <Navbar /> <Home /> <CustomFooter /> </>} />
        <Route path="/plots/:size/:city/:price" element={<> <Navbar /> <AllProperties /> <CustomFooter /> </>} />
        <Route path="/order" element={<> <Navbar /> <OrderPage /> <CustomFooter /> </>} />

        {/* Dashbord */}
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="/dashboard/home" element={<DefaultHome />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/newproject" element={<ListNewProperty />} />
          <Route path="/dashboard/myproject" element={<ListedProperties />} />
        </Route>



        <Route path="/about" element={<> <Navbar /> <AboutUs /> <CustomFooter /> </>} />
        <Route path="/contact" element={<> <Navbar /> <ContactUs /> <CustomFooter /> </>} />
        <Route path="/login" element={<><Login /> <CustomFooter /> </>} />
        <Route path="/signup" element={<> <Navbar /> <SignUp /> <CustomFooter /> </>} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>

    </div>
  );
}

export default App;
