import { IoMdMoon } from "react-icons/io";
import { IoSunnySharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, Tooltip } from "@mui/material";
import { toggleTheme } from "../../../slices/themeSlice";

export default function ThemeSwitch() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.mode === "dark");

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };
  return isDarkMode ? (
    <Tooltip title="Switch to Light Mode">
      <IconButton
        onClick={toggleThemeHandler}
        sx={{
          color: (theme) => theme.palette.color.primary,
        }}
      >
        <IoMdMoon size={17} />
      </IconButton>
    </Tooltip>
  ) : (
    <Tooltip title="Switch to Dark Mode">
      <IconButton
        onClick={toggleThemeHandler}
        sx={{
          color: (theme) => theme.palette.color.primary,
        }}
      >
        <IoSunnySharp size={16} />
      </IconButton>
    </Tooltip>
  );
}
// <div className="flex items-center ">
//   {isDarkMode ? (
//     <Tooltip title="Switch to Light Mode">
//       <button
//         onClick={toggleThemeHandler}
//         className="rounded-lg bg-lightbg2 dark:bg-darkbg2 "
//       >
//         <IoMdMoon className="w-5 h-5 text-black dark:text-darktext" />
//       </button>
//     </Tooltip>
//   ) : (
//     <Tooltip title="Switch to Dark Mode">
//       <button
//         onClick={toggleThemeHandler}
//         className="rounded-lg bg-lightbg2 dark:bg-darkbg2"
//       >
//         <IoSunnySharp className="w-5 h-5 text-black dark:text-darktext" />
//       </button>
//     </Tooltip>
//   )}
// </div>
