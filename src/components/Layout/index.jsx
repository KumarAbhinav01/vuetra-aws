import { Box } from "@mui/material";
import Header from "./Header";
import SideBar from "./Sidebar";
import { Outlet } from "react-router-dom";
import SideBar1 from "./Sidebar/Sidebar2";

export default function Layout() {
  return (
    // <div className="flex min-h-screen dark:bg-darkbg3">
    //   <SideBar />
    //   <div className="w-full max-h-screen overflow-y-auto ">
    //     <Header />
    //     <main className="flex-1">{children}</main>
    //   </div>
    // </div>
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: (theme) => theme.palette.color.bg,
      }}
    >
      <SideBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxHeight: "100vh",
        }}
      >
        <Header />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            overflowY: "auto",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <SideBar1 />
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
