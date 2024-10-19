import { Outlet } from "react-router-dom";
import StudentViewCommonHeader from "./StudentHeader";

export default function StudentViewCommonLayout() {
  return (
    <div>
      <StudentViewCommonHeader  />
      <Outlet />
    </div>
  )
}
