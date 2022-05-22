import About from "pages/Displayed/About";
import FAQ from "pages/Displayed/FAQ";

const DataOverview = {
  // Replace the strings with your social media handles
  navbar_data: {
    title: "Typescript Template"
  },
  footer_data: {
    heading: "Useful Links",
    name: "Kachi Cheong",
    year: 2021
  },
  footer_pages: {
    // Replace this with your own pages or remove key and value if not required
    about: About,
    faq: FAQ,
    external_link: "https://www.google.com/"
  },
  social_media: {
    // Replace or comment out unrelated social media handles
    facebook: "facebook",
    instagram: "instagram",
    github: "github",
    twitter: "twitter",
    pintrest: "pintrest",
    snapchat: "snapchat",
    tiktok: "tiktok",
    youtube: "youtube"
  }
};

export default DataOverview;
