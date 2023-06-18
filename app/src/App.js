// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
/*
import {
  AccomsPage,
  AdminPage,
  Home,
  LandlordHome,
  LandlordProfile,
  Listing,
  UserProfile,
  Details,
} from "./pages";
*/

import { Home } from "./pages";
import LoadingScreenPage from "./atoms/loadingScreenPage/LoadingScreenPage";

const AccomsPage = lazy(()=> import("./pages/accomsPage/AccomsPage.js"));
const AdminPage = lazy(()=> import("./pages/adminPage/AdminPage.js"));
// const Home = lazy(()=> import("./pages/home/Home.js"));
const LandlordHome = lazy(()=> import("./pages/landlordHome/LandlordHome.js"));
const LandlordProfile = lazy(()=> import("./pages/landlord_profile/LandlordProfile.js"));
const Listing = lazy(()=> import("./pages/listing/Listing.js"));
const UserProfile = lazy(()=> import("./pages/userProfile/UserProfile.js"));
const Details = lazy(()=> import("./pages/detailsPage/details.js"));
const DevPage = lazy(()=> import("./pages/devPage/DevPage.js"));
const NotFound = lazy(()=> import("./pages/notFound/NotFound.js"));


const App = () => {
  return (
    <Suspense fallback={<LoadingScreenPage />}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/AccomsPage"
        element={
          <div>
            <AccomsPage />
          </div>
        }
      />
      <Route
        path="/AdminPage"
        element={
          <div>
            <AdminPage />
          </div>
        }
      />
      <Route
        path="/LandlordHome"
        element={
          <div>
            <LandlordHome />
          </div>
        }
      />
      <Route
        path="/LandlordProfile"
        element={
          <div>
            <LandlordProfile />
          </div>
        }
      />
      <Route
        path="/Listing"
        element={
          <div>
            <Listing />
          </div>
        }
      />
      <Route
        path="/UserProfile"
        element={
          <div>
            <UserProfile />
          </div>
        }
      />
      <Route
        path="/Details"
        element={
          <div>
            <Details />
          </div>
        }
      />
      <Route
        path="/DevPage"
        element={
          <div>
            <DevPage />
          </div>
        }
      />
      {/* Undefined route  */}
      <Route 
        path="*"
        element={
          <NotFound />
        }
      />
    </Routes>
    </Suspense>
  );
};

export default App;
