import { Sidebar } from "../_components/Sidebar";

export default function ProfileLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-4 mx-auto items-center justify-center">{children}</div>
    </div>
  );
}
