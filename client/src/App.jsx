import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import RouteGuard from "./components/route-gaurd/RouteGuard";
import StudentViewCommonLayout from "./components/student-view/StudentViewCommonLayout";
import { AuthContext } from "./context/authContext";
import AuthPage from "./pages/AuthPage";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import AddNewCoursePage from "./pages/instructor/AddNewCoursePage";
import InstructorDashboardpage from "./pages/instructor/InstructorDashboardPage";
import StudentViewCoursesPage from "./pages/student/ViewCoursesPage";
import StudentViewCourseDetailsPage from "./pages/student/CourseDetailsPage";
import StudentViewCourseProgressPage from "./pages/student/CourseProgressPage";
import StudentHomePage from "./pages/student/HomePage";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <Routes>
      {/* home-page routes */}
      <Route path='/' element={<Home />}/>
      {/* auth routes */}
      <Route
        path="/auth"
        element={
          <RouteGuard
            element={<AuthPage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />
      {/* instructor pages routes */}
      <Route
        path="/instructor"
        element={
          <RouteGuard
            element={<InstructorDashboardpage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />
      <Route
        path="/instructor/create-new-course"
        element={
          <RouteGuard
            element={<AddNewCoursePage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />
      <Route
        path="/instructor/edit-course/:courseId"
        element={
          <RouteGuard
            element={<AddNewCoursePage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />
      {/* student pages routes */}
      <Route
        path="/"
        element={
          <RouteGuard
            element={<StudentViewCommonLayout />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      >
        <Route path="" element={<StudentHomePage />} />
        <Route path="home" element={<StudentHomePage />} />
        <Route path="courses" element={<StudentViewCoursesPage />} />
        <Route
          path="course/details/:id"
          element={<StudentViewCourseDetailsPage />}
        />
        {/* <Route path="payment-return" element={<PaypalPaymentReturnPage />} />
        <Route path="student-courses" element={<StudentCoursesPage />} /> */}
        <Route
          path="course-progress/:id"
          element={<StudentViewCourseProgressPage />}
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;