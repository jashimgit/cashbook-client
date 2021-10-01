import React from "react";
import DashboardMainContent from "./DashboardMainContent";
import DashboardLayout from "./Layout/DashboardLayout";


export default function Dashboard() {
    return (
        <DashboardLayout>
            <DashboardMainContent />
        </DashboardLayout>
    );
}
