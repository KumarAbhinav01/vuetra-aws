import { BiNavigation, BiSolidNavigation } from "react-icons/bi";
import { FaRegCreditCard } from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import { HiPencilAlt } from "react-icons/hi";
import { HiMiniChartBar } from "react-icons/hi2";
import { IoNotifications } from "react-icons/io5";
import { MdOutlinePercent } from "react-icons/md";
import { PiFlagPennantBold } from "react-icons/pi";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { TbRepeat } from "react-icons/tb";

export const dashboardItems = [
  { title: "Statistics", icon: HiMiniChartBar },
  { title: "Orders", icon: RiShoppingBag2Fill },
  { title: "Manage Payouts", icon: FaRegCreditCard },
  { title: "Tickets", icon: BiSolidNavigation },
];

export const dashboardItems2 = [
  {
    title: "New notification",
    icon: IoNotifications,
    tooltip: "Add new system notification to all or specific trader",
  },
  { title: "New Article", icon: HiPencilAlt, tooltip: "Post a new article" },
  { title: "New Coupon", icon: FiGift, tooltip: "Create a new coupon code" },
  {
    title: "New Sale",
    icon: MdOutlinePercent,
    tooltip: "Launch or schedule a new sale",
  },
];

export const dashboardItems3 = [
  {
    title: "Total revenue",
    value: "$150,000.00",
    tooltip: "Amount of unresolved open tickets",
  },
  {
    title: "Todays sales",
    value: "145",
    tooltip: "Amount of unresolved open tickets",
  },
];

export const ticketItems = [
  {
    name: "Jens B.",
    message1: "from",
    account: "Account Number",
    message2: "requested payout of $1,500.15",
    time: "1h ago",
    icon: TbRepeat,
    buttons: [
      { text: "Reject", color: "secondary" },
      { text: "Review", color: "blue" },
    ],
    access: [0, 2],
  },
  {
    name: "Shae F.",
    message1: "opened ticket for",
    account: "Refund",
    tag: "#AI",
    icon: BiNavigation,
    time: "1h ago",

    buttons: [
      { text: "Close", color: "secondary" },
      { text: "Resolve", color: "blue" },
    ],
    access: [0, 1],
  },
  {
    account: "Account Number",
    message2: "flagged for",
    time: "1h ago",
    icon: PiFlagPennantBold,
    buttons: [
      { text: "Ignore", color: "secondary" },
      { text: "Review", color: "red" },
    ],
    access: [0, 2, 3],
  },
  {
    account: "Account Number",
    message2: "flagged for",
    time: "1h ago",
    icon: PiFlagPennantBold,
    buttons: [
      { text: "Ignore", color: "secondary" },
      { text: "Review", color: "red" },
    ],
    access: [0, 1, 3],
  },
  {
    account: "Account Number",
    message2: "flagged for",
    time: "1h ago",
    icon: PiFlagPennantBold,
    buttons: [
      { text: "Ignore", color: "secondary" },
      { text: "Review", color: "red" },
    ],
    access: [0, 1, 2, 3],
  },
];

export const activeSales = [
  {
    heading: "Ongoing",
    color: "green",
    sales: [
      {
        title: "Easter Sale",
        discount: "35%",
        code: "XUFAFO15",
        product: "All Products",
        startDate: "29 March",
        endDate: "11 April",
      },
    ],
  },
  {
    heading: "Upcoming",
    sales: [
      {
        title: "Summer Sale",
        discount: "25%",
        code: "XUFAFO15",
        product: "All Products",
        startDate: "29 March",
        endDate: "11 April",
      },
      {
        title: "Mothers Day Sale",
        discount: "15%",
        code: "XUFAFO15",
        product: "All Products",
        startDate: "29 March",
        endDate: "11 April",
      },
      {
        title: "Black Friday Sale",
        discount: "50%",
        code: "XUFAFO15",
        product: "All Products",
        startDate: "29 March",
        endDate: "11 April",
      },
    ],
  },
];
