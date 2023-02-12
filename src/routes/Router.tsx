import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layout/DefaultLayout";
import { Home } from '../pages/Home/index';
import { CheckOut } from '../pages/Checkout/index';
import { Succeess } from "../pages/Sucess";

export function Router () {
  return (
    <>
    <Routes>
     <Route path="/" element={ <DefaultLayout />}>
      <Route path="/" element={ <Home />} />
      <Route path="/check-out" element={ <CheckOut />} />
      <Route path="/success" element={ <Succeess />} />
     </Route>
    </Routes>
    </>
  )
}