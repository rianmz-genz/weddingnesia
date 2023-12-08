import NavbarGuest from "../dashboard/guest/navbar";
import ProfileCard from "../dashboard/user/profilecard";

function DashboardGuest({ children }) {
  return (
    <div className="w-full min-h-screen bg-slate-50/90 flex justify-center items-center">
      <div className="w-2/12 max-md:hidden h-screen"></div>
      <NavbarGuest />
      <div className="md:w-10/12 w-11/12 mx-auto min-h-screen mr-3 pt-12">
        {/* <ProfileCard /> */}
        {children}
      </div>
    </div>
  );
}

export default DashboardGuest;
