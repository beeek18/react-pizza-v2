import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Loadable from 'react-loadable';

import Home from "./pages/Home";

import "./scss/app.scss";
import MainLayouts from "./layouts/MainLayout";

const Cart = Loadable({
  loader: () => import(/* webpackChunkName: "Cart" */ './pages/Cart'),
  loading: () => <div>Loading...</div>,
});

const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */ './pages/FullPizza'))
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'))

const App = () => {
  return (
    <Routes>

      <Route path="" element={<MainLayouts />}>
        <Route path="" element={<Home />} />

        <Route path="/cart" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>} />

        <Route path="/pizza/:id" element={
          <Suspense fallback={<div>Loading...</div>}>
            <FullPizza />
          </Suspense>} />

        <Route path="*" element={
          <Suspense fallback={<div>Loading...</div>}>
            <NotFound />
          </Suspense>} />
      </Route>
    </Routes>
  );
};

export default App;
