'use client'
import React from 'react'
import AdminSidebar from "../../../components/admin/sidebar/adminSidebar";
import Heading from '../../../../app/utils/Heading';
import DashboardHeader from '../../../../app/components/admin/DashBoardHeader';
import EditCourse from "../../../components/admin/Course/EditCourse";

type Props = {}

const page = ({params}:any) => {
    const id = params?.id;

  return (
    <div>
        <Heading
         title="Elearning - Admin"
         description="ELearning is a platform for students to learn and get help from teachers"
         keywords="Prograaming,MERN,Redux,Machine Learning"
        />
        <div className="flex">
            <div className="1500px:w-[16%] w-1/5">
                <AdminSidebar />
            </div>
            <div className="w-[85%]">
               <DashboardHeader />
               <EditCourse id={id} />
            </div>
        </div>
    </div>
  )
}

export default page