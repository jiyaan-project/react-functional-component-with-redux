// import external modules
import React from "react";
import { Route, Redirect } from "react-router-dom";
// import internal(own) modules
import MainLayout from "../mainLayout";
const MainLayoutRoute = ({ render, ...rest }) => {
   const JwTtoken = 'true';
   return (
      <Route
         {...rest}
         render={matchProps => (
            JwTtoken ?
               <MainLayout>{render(matchProps)}</MainLayout> :
               <Redirect to="/login" />

         )}
      />
   );
};

export default MainLayoutRoute;
