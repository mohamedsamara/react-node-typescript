import React, { FC } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import NoMatch from "@/components/NoMatch";
import RequireAuth from "@/components/RequireAuth";
import Layout from "@/components/Layout";

const App: FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
