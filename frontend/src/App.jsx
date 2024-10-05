import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <main className="p-4 h-screen flex items-center justify-center">
      <Outlet />
    </main>
  );
}
