// COMPONENTS
import SiteSingleArticle from "./components/SiteSingleArticle"
// CSS
import "./SiteArticles.css"
// PROPS
import {  SiteArticleProps } from "./SiteArticlesProps"
// TOOLS
import { TitleTrimmer } from "tools/StringTools"
import { TernaryLogic } from "tools/FunctionTools"

const SiteArticle = ({ data, link_type }: SiteArticleProps) => {

    const displayCards = data.map(card => {

        const {
            date,
            description,
            image,
            link,
            title
        } = card

        const linkLogic = link_type === "external" ? link : `/${link}`

        const SingleArticle = {
            date,
            description,
            image,
            key: title,
            link: linkLogic,
            link_type: TernaryLogic(card.link_type, link_type),
            title: TitleTrimmer(title, 60),
        }

        return <SiteSingleArticle {...SingleArticle} />

    }).slice(0, 6)
    
    return (
        <div className="gridywrap">
            {displayCards}
        </div>
    )
}

export default SiteArticle