/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import InstructorCourses from "@/components/instructor-view/courses/InstructorViewCourses";
import InstructorDashboard from "@/components/instructor-view/dashboard/InstructorViewDashboard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { AuthContext } from "@/context/authContext";
import { InstructorContext } from "@/context/instructorContext";
import { fetchInstructorCourseListService } from "@/services";
import { BarChart, Book, LogOut } from "lucide-react";
import { useContext, useEffect, useState } from "react";

function InstructorDashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { resetCredentials } = useContext(AuthContext);
  const { instructorCoursesList, setInstructorCoursesList } =
    useContext(InstructorContext);

  async function fetchAllCourses() {
    const response = await fetchInstructorCourseListService();
    if (response?.success) setInstructorCoursesList(response?.data);
  }

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const menuItems = [
    {
      icon: BarChart,
      label: "Dashboard",
      value: "dashboard",
      component: <InstructorDashboard listOfCourses={instructorCoursesList} />,
    },
    {
      icon: Book,
      label: "Courses",
      value: "courses",
      component: <InstructorCourses listOfCourses={instructorCoursesList} />,
    },
    {
      icon: LogOut,
      label: "Logout",
      value: "logout",
      component: null,
    },
  ];

  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
  }

  console.log(instructorCoursesList, "instructorCoursesList");

  return (
    <div className="flex h-full min-h-screen bg-neutral-300">
      <aside className="w-64 bg-neutral-200 shadow-md hidden md:block text-neutral-500">
        <div className="p-4">
          <h2 className="text-2xl font-bold m-4">Instructor View</h2>
          <nav >
            {menuItems.map((menuItem) => (
              <Button
                className="w-full justify-start mb-2 bg-neutral-300 hover:bg-neutral-400"
                key={menuItem.value}
                // change clolor in css
                variant={activeTab === menuItem.value ? "secondary" : "ghost"}
                onClick={
                  menuItem.value === "logout"
                    ? handleLogout
                    : () => setActiveTab(menuItem.value)
                }
              >
                <menuItem.icon className="mr-2 h-4 w-4" />
                {menuItem.label}
              </Button>
            ))}
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto text-neutral-600">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-neutral-600">Dashboard</h1>
          <Tabs value={activeTab} onValueChange={setActiveTab} >
            {menuItems.map((menuItem) => (
              <TabsContent value={menuItem.value}>
                {menuItem.component !== null ? menuItem.component : null}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  );
}

export default InstructorDashboardPage;