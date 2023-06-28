import React from 'react';
import DashboardToggle from './dashboard/DashboardToggle';
import CreateRoomBtn from './dashboard/CreateRoomBtn';
const Sidebar = () => {
  return (
    <div className="h-100 pt-2">
      <div>
        <DashboardToggle />
        <CreateRoomBtn />
      </div>
      bottom
    </div>
  );
};

export default Sidebar;
