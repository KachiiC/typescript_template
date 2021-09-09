// Template
import PageTemplate from "Sections/Main/Pages/Displayed/PageTemplate"

const DataOverview = {
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
        about: <PageTemplate name="About us Page" />,
        contact: <PageTemplate name="Contact Page" />,
        faq: <PageTemplate name="FAQ Page" />,
        privacy: <PageTemplate name="Privacy Policy Page" />,
        terms: <PageTemplate name="Terms and Conditions Page" />,
    }
}

export default DataOverview