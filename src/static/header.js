import { BiCommand } from "react-icons/bi";
import { IoDocumentOutline } from "react-icons/io5";

export const cards = [
  {
    title: "Speed up research",
    items: [
      { title: "AI Assistant chat", description: "Ask Vue Assistant anything" },
      {
        title: "Ecommerce calendar",
        description: "Show important global days",
      },
      {
        title: "Planned discounts",
        description: "Show important global days",
      },
    ],
  },
  {
    title: "Gain insights",
    items: [
      { title: "All time revenue" },
      {
        title: "Total breached",
      },
      {
        title: "Total funded",
      },
      { title: "Active traders" },
      {
        title: "Best performing product",
      },
      {
        title: "Best performing acc. size",
      },
      { title: "Active traders" },
      {
        title: "Best performing product",
      },
      {
        title: "Best performing acc. size",
      },
    ],
  },
];

export const searchItems = [
  {
    title: "Most used",
    items: [
      { title: "Add account", icon: <BiCommand size={12} />, shortcut: "A" },
      { title: "Payouts", icon: <IoDocumentOutline size={12} /> },
    ],
  },
  {
    title: "Firm",
    items: [
      { title: "Add Product", icon: <BiCommand size={12} /> },
      { title: "Add user", icon: <BiCommand size={12} />, shortcut: "D" },
      { title: "text", icon: <IoDocumentOutline size={12} /> },
      { title: "text", icon: <IoDocumentOutline size={12} /> },
    ],
  },
  {
    title: "Trading accounts",
    items: [
      { title: "text", icon: <IoDocumentOutline size={12} /> },
      { title: "text", icon: <IoDocumentOutline size={12} /> },
    ],
  },
];
