import { BiBarChartSquare, BiSolidNavigation } from "react-icons/bi";
import { FaCodeBranch } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { HiMiniChartBar, HiMiniUsers } from "react-icons/hi2";
import { IoFlash, IoSettings } from "react-icons/io5";
import { MdChatBubble, MdHomeFilled } from "react-icons/md";
import { PiCirclesFourBold } from "react-icons/pi";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { TbLayoutList, TbPhotoCircle, TbRepeat } from "react-icons/tb";

export const navItems = [
  {
    title: "Dashboard",
    icon: MdHomeFilled,
    path: "/",
    tooltip: "Dashboard",
  },
  {
    title: "Your Firm",
    icon: RiShoppingBag2Fill,
    path: "/firm",
    tooltip: "Your Firm",
    to: "/firm/products",
    children: [
      {
        title: "Firm",
        path: "/firm",
        children: [
          {
            title: "Products",
            path: "/firm/products",
            heading: "Products",
            button: "Add New Product",
          },
          { title: "Orders", path: "/firm/orders" },
          {
            title: "Customers",
            path: "/firm/customers",
          },
          {
            title: "Discounts",
            path: "/firm/discounts",
            button: "Add New Discount",
          },
          { title: "Payouts", path: "/firm/payouts" },
        ],
      },
      {
        title: "Content Management",
        path: "/firm/content-management",
        children: [
          {
            title: "Help Center",
            path: "/firm/content-management",
            to: "/firm/content-management/all-articles",
            children: [
              {
                title: "Help-Center",
                path: "/firm/content-management",
                children: [
                  {
                    title: "All articles",
                    path: "/firm/content-management/all-articles",
                  },
                  {
                    title: "Public articles",
                    path: "/firm/content-management/public-articles",
                  },
                  {
                    title: "Private articles",
                    path: "/firm/content-management/private-articles",
                  },
                  {
                    title: "Published",
                    path: "/firm/content-management/published",
                  },
                  { title: "Drafts", path: "/firm/content-management/drafts" },
                ],
              },
              {
                title: "Collections",
                path: "/firm/content-management/collections",
                children: [
                  {
                    title: "Collections",
                    path: "/firm/content-management/collections",
                  },
                  {
                    title: "Videos",
                    path: "/firm/content-management/videos",
                  },
                ],
              },
            ],
          },
          {
            title: "Announcements",
            path: "/firm/content-management/announcements",
            button: "Add New Announcement",
          },
        ],
      },
    ],
    button: "Add New Product",
  },
  {
    title: "Trading Accounts",
    icon: HiMiniUsers,
    path: "/trading-accounts",
    tooltip: "Trading Accounts",
    to: "/trading-accounts/all",
    children: [
      {
        title: "Accounts",
        path: "/trading-accounts",
        children: [
          { title: "All Accounts", path: "/trading-accounts/all" },
          {
            title: "Flagged Accounts",
            path: "/trading-accounts/flagged-accounts",
          },
        ],
      },
      {
        title: "Platforms",
        path: "/trading-accounts",
        children: [
          { title: "Metatrader", path: "/trading-accounts/metatrader" },
          { title: "CTrader", path: "/trading-accounts/ctrader" },
          { title: "Tradelocker", path: "/trading-accounts/tradelocker" },
        ],
      },
      {
        title: "Settings",
        icon: IoSettings,
        path: "/trading-accounts/settings",
      },
    ],
  },
  {
    title: "Statistics",
    icon: HiMiniChartBar,
    path: "/statistics",
    tooltip: "Statistics",
    to: "/statistics/store-performance",
    children: [
      {
        title: "Statistics",
        path: "/statistics",
        children: [
          { title: "Store performance", path: "/statistics/store-performance" },
          { title: "Traders", path: "/statistics/traders" },
          { title: "Customer service", path: "/statistics/customer-service" },
        ],
      },
      {
        title: "AI-Assistant",
        icon: MdChatBubble,
        path: "/statistics/ai-assistant",
        notVisible: true,
        noSidebar: true,
        noHeader: true,
      },
    ],
  },
  {
    title: "Customer Support",
    icon: BiSolidNavigation,
    path: "/customer-services",
    to: "/customer-services/open-tickets",
    tooltip: "Customer Services",
    children: [
      {
        title: "Tickets",
        path: "/customer-services",
        children: [
          {
            title: "Open Tickets",
            path: "/customer-services/open-tickets",
            button: "Add new account",
          },
          { title: "All Tickets", path: "/customer-services/all" },
          {
            title: "Assigned to me",
            path: "/customer-services/assigned-to-me",
          },
          {
            title: "Closed Tickets",
            path: "/customer-services/closed-tickets",
          },
          {
            title: "Conversations",
            path: "/customer-services/conversation",
            notVisible: true,
            noSidebar: true,
            noHeader: true,
          },
        ],
      },
      {
        title: "Categories",
        children: [
          { title: "Refunds", path: "/customer-services/refunds" },
          {
            title: "Account Issues",
            path: "/customer-services/account-issues",
          },
          { title: "Broker", path: "/customer-services/broker" },
          {
            title: "Trading Platform",
            path: "/customer-services/trading-platform",
          },
          { title: "Bug", path: "/customer-services/bug" },
        ],
      },
    ],
    children2: [
      {
        title: "Settings",
        path: "/customer-services/settings",
        to: "/customer-services/settings/overview",
        icon: IoSettings,
        children: [
          // {
          //   title: "Settings",
          //   path: "/customer-services/settings/overview",
          //   noHeader: true,
          //   children: [
          //     {
          //       title: "Overview",
          //       path: "/customer-services/settings/overview",
          //       noHeader: true,
          //     },
          //     {
          //       title: "Data sources",
          //       path: "/customer-services/settings/data-sources",
          //     },
          //     {
          //       title: "Custom answers",
          //       path: "/customer-services/settings/custom-answers",
          //     },
          //     {
          //       title: "Settings",
          //       path: "/customer-services/settings/settings",
          //     },
          //   ],
          // },
          {
            title: "Overview",
            path: "/customer-services/settings/overview",
            noHeader: true,
          },
          {
            title: "Data sources",
            path: "/customer-services/settings/data-sources",
          },
          {
            title: "Custom answers",
            path: "/customer-services/settings/custom-answers",
          },
          {
            title: "Settings",
            path: "/customer-services/settings/settings",
          },
        ],
      },
    ],
  },
  {
    title: "Affiliate center",
    icon: FaCodeBranch,
    path: "/affiliate-center",
    tooltip: "Affiliate Center",
    to: "/affiliate-center/overview",
    children: [
      {
        title: "All",
        path: "/affiliate-center",
        children: [
          {
            title: "Overview",
            path: "/affiliate-center/overview",
            icon: TbPhotoCircle,
            button: "Add affiliate",
          },
          {
            title: "Affiliates",
            path: "/affiliate-center/affiliates",
            icon: PiCirclesFourBold,
            button: "Add affiliate",
          },
          {
            title: "Programs",
            path: "/affiliate-center/programs",
            icon: TbLayoutList,
            heading: "Programs",
            button: "Add affiliate",
          },
          {
            title: "Reports",
            path: "/affiliate-center/reports",
            icon: BiBarChartSquare,
            button: "Add affiliate",
          },
          {
            title: "Payouts",
            path: "/affiliate-center/payouts",
            icon: TbRepeat,
            button: "Add affiliate",
          },
          {
            title: "Announcement",
            path: "/affiliate-center/announcement",
            icon: GrAnnounce,
            button: "Add affiliate",
          },
        ],
        button: "Add affiliate",
      },
    ],
  },
  //     title: 'Customer Service',
  //     icon: 'NavigationIcon',
  //     path: '/customer-service',
  //     tooltip: 'Customer Service'
  // }
];

export const navItems2 = [
  {
    title: "Integrations",
    icon: IoFlash,
    to: "/settings/integrations",
    tooltip: "Integrations",
    path: "/integrations",
  },
  {
    title: "Settings",
    icon: IoSettings,
    path: "/settings",
    tooltip: "Settings",
    to: "/settings/general",
    children: [
      { title: "General", path: "/settings/general", noHeader: true },
      { title: "Domains", path: "/settings/domains", noHeader: true },
      { title: "Integrations", path: "/settings/integrations" },
      { title: "Brokers/ platforms", path: "/settings/brokers-platforms" },
      { title: "Payment providers", path: "/settings/payment-providers" },
      { title: "Webhooks", path: "/settings/webhooks" },
      { title: "Emails", path: "/settings/emails" },
      { title: "Certificates", path: "/settings/certificates" },
      { title: "Affiliates", path: "/settings/affiliates" },
      { title: "Recovery", path: "/settings/recovery" },
      { title: "Billing", path: "/settings/billing" },
      { title: "Team", path: "/settings/team" },
      { title: "Firms", path: "/settings/firms" },
      { title: "API", path: "/settings/api" },
    ],
  },
];
