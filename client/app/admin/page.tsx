"use client";
import React from "react";
import Heading from "../utils/Heading";
import AdminSidebar from "../components/admin/sidebar/adminSidebar";
import AdminProtected from "../hooks/adminProtected";
import DashboardHero from "../components/admin/DashBoardHero";

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="Elearning - Admin"
          description="ELearning is a platform for students to learn and get help from teachers"
          keywords="Programming,MERN,Redux,Machine Learning"
        />
        <div className="flex min-h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHero isDashboard={true} />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default Page;