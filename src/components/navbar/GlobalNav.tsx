import { memo } from "react";
import Navbar from "./Navbar";
import UserProfile from "./UserProfile";

const GlobalNav = memo(() => {
  console.log("GlobalNav rendered");

  return (
    <div className="flex flex-row items-center justify-between px-6 py-2 text-white bg-amber-600">
      <Navbar />
      <UserProfile />
    </div>
  );
});
export default GlobalNav;
