import { Navigate } from "react-router-dom";
import MessengerContainer from "../../components/messenger/MessengerContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import useAuthContext from "../../hooks/useAuthContext";

export default function Home() {
  const { authUser } = useAuthContext();

  if (!authUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessengerContainer />
    </div>
  );
}
