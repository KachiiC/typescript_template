// Template
import { FooterPagesExampleRender } from "Tools/ExampleTools"

const DataOverview = {
    // Replace the strings with your social media handles
    social_media: {
        facebook: "facebook",
        instagram: "instagram",
        pintrest: "pintrest",
        snapchat: "snapchat",
        tiktok: "tiktok",
        twitter: "twitter",
        youtube: "",
        github: "KachiiC"
    },
    footer_pages: {
        // Replace this with your own pages or remove key and value if not required 
        about: "",
        contact: "",
        faq: "",
        privacy: "",
        terms: "",
    }
}

// Remove when using your own pages
FooterPagesExampleRender(DataOverview.footer_pages)

export default DataOverview