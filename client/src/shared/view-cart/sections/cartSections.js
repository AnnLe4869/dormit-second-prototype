import { renderSpecials, renderDeals, renderTrending } from "../../../helper/renderProducts";

/** The cart sections array should contain details of each suggested section to display to users in cart
 * Each section has its own function to render relevant products only
 * */ 

export const cartSections = [
  {
    sectionId: "trendingSection",
    sectionListId: "trendingList",
    sectionName: "Trending",
    renderFunction: renderTrending
  },
  {
    sectionId: "specialsSection",
    sectionListId: "specialList",
    sectionName: "Specials",
    renderFunction: renderSpecials
  },
  {
    sectionId: "dealsSection",
    sectionListId: "dealList",
    sectionName: "Deals",
    renderFunction: renderDeals
  }
];