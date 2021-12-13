// COMPONENTS
import SiteSingleArticle from "./components/SiteSingleArticle"
// CSS
import "./SiteArticles.css"
// PROPS
import {  SiteArticleProps } from "./SiteArticlesProps"
// TOOLS
import { TitleTrimmer } from "Tools/StringTools"

const SiteArticle = (props: SiteArticleProps) => {

    const { data, link_type } = props

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
            date: date ,
            description: description ,
            image: image,
            key: title,
            link: linkLogic,
            link_type: link_type,
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