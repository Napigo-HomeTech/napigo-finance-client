import { Avatar } from "components/element";
import React from "react";
import { FaCog, FaDoorOpen, FaHome } from "react-icons/fa";

export const UserMenuDropdown: React.FC = () => {
  return (
    <div className="w-[260px] h-[auto]">
      {/* heading */}
      <div className="flex flex-row px-[10px] py-[20px] items-center gap-2 border-b-[0.5px] border-base-content/20">
        <Avatar size="sm" ringColor="primary" withRing />
        {/* Textual container for heading  */}
        <div className="flex flex-1 flex-col px-[10px]">
          <p className="text-md font-bold">Hanafi Yakub</p>
          <p className="text-sm text-accent">Admin</p>
        </div>
      </div>

      {/* Main section */}
      <ul className="list-none py-1 border-b-[0.5px] border-base-content/20" role="menu">
        <li className="" role="menuitem">
          <div className="btn btn-ghost gap-2 btn-block justify-start px-6">
            <FaHome size={20} />
            <p className="font-normal">Back to Napigo - Home</p>
          </div>
        </li>
        <li className="" role="menuitem">
          <div className="btn btn-ghost gap-2 btn-block justify-start px-6">
            <FaCog size={20} />
            <p className="font-normal">Profile Setting</p>
          </div>
        </li>
      </ul>
      {/* General Section */}
      <ul className="list-none py-1" role="menu">
        <li className="" role="menuitem">
          <div className="btn btn-ghost gap-2 btn-block justify-start px-6 text-error">
            <FaDoorOpen size={20} />
            <p className="font-normal">Logout</p>
          </div>
        </li>
      </ul>
    </div>
  );
};
