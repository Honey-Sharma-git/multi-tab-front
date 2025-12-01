import { useContext } from "react";
import { StatusContext } from "../../contexts/StatusContext";

const UserProfile = () => {
  console.log("UserProfile rendered");
  const { status } = useContext(StatusContext);

  function getColorClass(status: string) {
    switch (status) {
      case "Away":
        return "bg-yellow-500";
        break;
      case "Offline":
        return "bg-gray-500";
        break;
      case "Active":
        return "bg-green-500";
        break;
      default:
        return "bg-red-500";
    }
  }

  return (
    <figure className="relative">
      <img
        src="/dummy-user.jpg"
        alt="user-profile-pic"
        className="h-10 aspect-square rounded-full"
      />
      <div
        title={status}
        className={`h-3 w-3 rounded-full absolute bottom-0 ${getColorClass(
          status
        )}`}
      ></div>
    </figure>
  );
};
export default UserProfile;
