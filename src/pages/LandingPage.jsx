import React, { useState } from "react";
import SpinWheel from "../components/SpinWheel";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { GrSettingsOption } from "react-icons/gr";
import { FaHistory } from "react-icons/fa";
import OptionManager from "../components/OptionManager";
import SpinHistory from "../components/SpinHistory";

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState("Options");

  return (
    <div className="container-fluid text-center">
      <header className="mb-5">
        <h1 className="my-purple-text">Spin-O-Matic Decider</h1>
        <em>Can't make a decision? Let the wheel decide for you!</em>
      </header>

      <main className="grid-layouts container row mt-5">
        <div className="col-8 d-flex justify-content-center">
          <SpinWheel />
        </div>
        <div className="col">
          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            className="mb-3 p-1 custom-bg"
            fill
          >
            <Tab
              eventKey="Options"
              title={
                <>
                  <GrSettingsOption style={{ marginRight: "5px" }} /> Options
                </>
              }
            >
              <div className="mt-4">
                <OptionManager />
              </div>
            </Tab>

            {/* History Tab */}

            <Tab
              eventKey="History"
              title={
                <>
                  <FaHistory style={{ marginRight: "5px" }} /> History
                </>
              }
            >
              <div className="mt-4">
                <SpinHistory />
              </div>
            </Tab>
          </Tabs>
        </div>
      </main>

      <footer className=" mt-5">
        <hr />
        <p>Spin-O-Matic Decider &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default LandingPage;
