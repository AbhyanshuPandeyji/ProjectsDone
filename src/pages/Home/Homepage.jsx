import { Fragment } from "react";
import "./homepage.css"

import Table from "../../components/table/Table.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
// import Dashboard from "../dashboard/Dashboard.jsx";
import TopBar from "../../components/topBar/TopBar.jsx";
import Tabs from "../../components/filters/Tabs.jsx";

const Homepage = () => {
  return (
    <Fragment>
      <Sidebar />
      <TopBar />
      <Tabs />
      <div className="section">
        <Table />
      </div>

    </Fragment>
  );
};

export default Homepage;
