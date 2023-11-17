'use client'

import "./home.scss";
import Script from "next/script";
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './components/dashboard/sidebar/Sidebar';
import Navbar from './components/dashboard/navbar/Navbar';
import Widget from './components/dashboard/widget/Widget';
import Chart from './components/dashboard/chart/Chart';
import OrderReceived from './components/dashboard/orderReceived/OrderReceived';
import TrendingSlider from './components/dashboard/trendingSlider/TrendingSlider';
import { useState } from "react";

const Home = () => {
  const [showDeliveryTime, setShowDeliveryTime] = useState(false);

  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      />
      <Script
        id="bootstrap-cdn"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      />

      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />

          <div className="d-flex justify-between items-center p-4">
            <div>
              <div className="welcomeText">Welcome</div>
              <div className="subWelcomeText">Here is the information about all your orders</div>
            </div>

            <div className="d-flex items-center">
              <div className="deliveryText">Delivery</div>
              <div className="switch" style={{ backgroundColor: showDeliveryTime ? "#000" : "#000" }}
                onClick={() => { setShowDeliveryTime(!showDeliveryTime) }}
              >
                <div className="switch-circle" style={{ float: showDeliveryTime ? "right" : "left" }} />
              </div>
            </div>
          </div>
          <div className="py-3 px-2 rounded" style={{ marginLeft: "20px", marginRight: "20px", border: "1px solid #eee" }}>
            <div className="row mx-auto">
              <Widget icon="/svg/total_menu.svg" label="Total Menu" value="150" />
              <Widget icon="/svg/total_revenue.svg" label="Total Revenue" value="89,935" />
              <Widget icon="/svg/total_orders.svg" label="Total Orders" value="814" />
              <Widget icon="/svg/total_customers.svg" label="Total Customers" value="450" />
            </div>
          </div>
          <div className="charts">
            <Chart title="Revenue and Order" />
          </div>
          <div className="charts">
            <OrderReceived title="Order Received" />
          </div>
          <div className="charts">
            <OrderReceived title="Current Orders" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
