import { Paper } from "@mui/material";
import Firm from "../pages/Firm";
import Customers from "../pages/Firm/customers";
import Discounts from "../pages/Firm/discounts";
import Orders from "../pages/Firm/orders";
import SingleCustomer from "../pages/Firm/single-customer";
import Home from "../pages/Home";
import TradingAccounts from "../pages/Trading-accounts";
import FlaggedAccounts from "../pages/Trading-accounts/flaggedaccounts";
import Statistics from "../pages/Statistics";
import Traders from "../pages/Statistics/traders";
import AllTickets from "../pages/Customer-service";
import OpenTickets from "../pages/Customer-service/openTickets";
import MyTickets from "../pages/Customer-service/mytickets";
import ClosedTickets from "../pages/Customer-service/closedtickets";
import Product from "../components/Firm/Products/Single-Product";
import Payouts from "../pages/Firm/Payouts";
import AllArticles from "../pages/Firm/Content-management/Help-center/all-artices";
import Announcement from "../pages/Firm/Content-management/Annoucements";
import Overview from "../pages/Affiliates/overview";
import Affiliates from "../pages/Affiliates/affiliates";
import General from "../pages/Settings/general";
import Domains from "../pages/Settings/domains";
import Videos from "../pages/Firm/Content-management/Collections/videos";
import Collections from "../pages/Firm/Content-management/Collections/collections";
import Announcements from "../pages/Affiliates/announcements";
import AffiliatePayouts from "../pages/Affiliates/payouts";
import Programs from "../pages/Affiliates/programs";
import EditCampaign from "../pages/Affiliates/EditCampaign";
import Stats from "../pages/Affiliates/stats";
import Commissions from "../pages/Affiliates/commissions";
import Conversations from "../pages/Customer-service/Conversations";
import SettingsOverview from "../pages/Customer-service/AI-Settings/overview";
import Reports from "../pages/Affiliates/reports";
import CustomAnswers from "../pages/Customer-service/AI-Settings/custom-answers";
import DataSources from "../pages/Customer-service/AI-Settings/data-sources";
import AISettings from "../pages/Customer-service/AI-Settings/settings";
import AiAssistant from "../pages/AI-Assistant/aiAssistant";

export const navItems = [
  { path: "/", element: <Home />, isPrivate: true, layout: true },
  {
    path: "/firm/products",
    element: <Firm />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/firm/products/:id",
    element: <Product />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/firm/orders",
    element: <Orders />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/firm/customers",
    element: <Customers />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/firm/customers/:id",
    element: <SingleCustomer />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/firm/discounts",
    element: <Discounts />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/firm/payouts",
    element: (
      <Paper
        sx={{
          p: "24px",
        }}
      >
        <Payouts />
      </Paper>
    ),
    isPrivate: true,
    layout: true,
  },
  {
    path: "/firm/content-management/all-articles",
    element: <AllArticles />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/firm/content-management/public-articles",
    element: <div></div>,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/firm/content-management/announcements",
    element: <Announcement />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/firm/content-management/collections",
    element: <Collections />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/firm/content-management/videos",
    element: <Videos />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/trading-accounts/all",
    element: <TradingAccounts />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/trading-accounts/flagged-accounts",
    element: <FlaggedAccounts />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/trading-accounts/metatrader",
    element: <div></div>,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/trading-accounts/ctrader",
    element: <div></div>,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/trading-accounts/tradelocker",
    element: <div></div>,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/trading-accounts/settings",
    element: <div></div>,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/trading-accounts/settings/account",
    element: <div></div>,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/statistics/store-performance",
    element: <Statistics />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/statistics/traders",
    element: <Traders />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/statistics/customer-service",
    element: <div></div>,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/statistics/ai-assistant",
    element: <AiAssistant />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/customer-services/all",
    element: <AllTickets />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/customer-services/conversation",
    element: <Conversations />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/customer-services/open-tickets",
    element: <OpenTickets />,
    isPrivate: true,
    layout: true,
  },

  {
    path: "/customer-services/assigned-to-me",
    element: <MyTickets />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/customer-services/closed-tickets",
    element: <ClosedTickets />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/customer-services/settings/overview",
    element: <SettingsOverview />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/customer-services/settings/custom-answers",
    element: <CustomAnswers />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/customer-services/settings/data-sources",
    element: <DataSources />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/customer-services/settings/settings",
    element: <AISettings />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/affiliate-center/overview",
    element: <Overview />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/affiliate-center/programs",
    element: <Programs />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/affiliate-center/programs/edit-campaign",
    element: <EditCampaign />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/affiliate-center/programs/stats",
    element: <Stats />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/affiliate-center/programs/commissions",
    element: <Commissions />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/affiliate-center/affiliates",
    element: <Affiliates />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/affiliate-center/compaigns",
    element: <div></div>,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/affiliate-center/reports",
    element: <Reports />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/affiliate-center/payouts",
    element: <AffiliatePayouts />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/affiliate-center/announcement",
    element: <Announcements />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/settings/general",
    element: <General />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/settings/domains",
    element: <Domains />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/settings/integrations",
    element: <div></div>,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/settings/webhooks",
    element: <General />,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/settings/brokers-platforms",
    element: <div></div>,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/settings/payment-providers",
    element: <div></div>,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/settings/emails",
    element: <div></div>,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/settings/certificates",
    element: <div></div>,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/settings/affiliates",
    element: <div></div>,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/settings/recovery",
    element: <div></div>,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/settings/billing",
    element: <div></div>,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/settings/team",
    element: <div></div>,
    isPrivate: true,
    layout: true,
  },
  {
    path: "/login",
    element: <div></div>,
    isPrivate: false,
    layout: false,
  },
  //   { path: "*", element: <Home />, isPrivate: false, layout: false },
];
