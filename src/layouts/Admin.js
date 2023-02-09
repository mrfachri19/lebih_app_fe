import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "../components/Footers/Footer.js";

// components

import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Approval from "../views/Admin/Approval.js";
import ApprovalDetail from "../views/Admin/ApprovalDetail.js";
import DeliveryList from "../views/Driver/DeliveryList.js";
import Driver from "../views/Driver/Driver.js";
import LandingPage from "../views/LandingPage/LandingPage"
import Chat from "../views/Merchant/Chat.js";
import ConfirmDetail from "../views/Merchant/CorfirmDetail.js";
import DaftarOrder from "../views/Merchant/DaftarOrder.js";
import LIveChat from "../views/Merchant/LiveChat.js";
import Recycle from "../views/Merchant/Recycle.js";
import Sharing from "../views/Merchant/Sharing.js";
import SharingDelivery from "../views/Merchant/SharingDelivery.js";
import Order from "../views/Order/Order.js";
import OrderCusrtomer from "../views/Order/OrderCustomer.js";
import OrderDetail from "../views/Order/OrderDetail.js";
import OrderPreview from "../views/Order/OrderPreview.js";
import Organisasi from "../views/Organisasi/Organisasi.js";

export default function Admin() {
 

  const renderLoader = () => <p>Loading</p>;

  return (
    <>
      <div className="relative">
        <AdminNavbar />
        {/* Header */}
        <div className="mx-auto w-full">
          <Suspense fallback={renderLoader()}>
            <Switch>
              <Route path="/admin" exact component={LandingPage} />
              <Route path="/admin/order" exact component={Order} />
              <Route path="/admin/order-customer/:id" exact component={OrderCusrtomer} />
              <Route path="/admin/order/detail" exact component={OrderDetail} />
              <Route path="/admin/order/preview" exact component={OrderPreview} />
              {/* merchant */}
              <Route path="/admin/daftar-order" exact component={DaftarOrder} />
              <Route path="/admin/confirm-order" exact component={ConfirmDetail} />
              {/* sumbangan */}
              <Route path="/admin/sharing" exact component={Sharing} />
              <Route path="/admin/sharing-delivery" exact component={SharingDelivery} />
              {/* admin */}
              <Route path="/admin/approval" exact component={Approval} />
              <Route path="/admin/approval/detail/:id" exact component={ApprovalDetail} />
              {/* driver */}
              <Route path="/admin/driver/delivery" exact component={DeliveryList} />
              <Route path="/admin/driver/delivery/:id" exact component={Driver} />
              {/* pupuk */}
              <Route path="/admin/livechat" exact component={LIveChat} />
              <Route path="/admin/chat" exact component={Chat} />
              {/* organisasi */}
              <Route path="/admin/organisasi" exact component={Organisasi} />
              {/* artikel */}
              <Route path="/admin/artikel" exact component={Recycle} />
              <Redirect from="/admin" to="/admin" />
            </Switch>
          </Suspense>
        </div>
        <Footer />
      </div>
    </>
  );
}
