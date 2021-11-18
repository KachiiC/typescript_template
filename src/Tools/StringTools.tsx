import { RenderLogic } from "./FunctionTools"

// If string is over length trim it and add ... to the end
export const TitleTrimmer = (word: string, length: number) => {

    return word.length < length ? 
        word 
        : 
        word.slice(0,length) + "..."
}

// Returns title and size
export const TitleLogic = (title: string | undefined, size: string | undefined) => {
    
    var displaytitle
    switch (size) {
        case "h1":
            displaytitle = <h1>{title}</h1>
            break
        case "h2":
            displaytitle = <h2>{title}</h2>
            break
        case "h3":
            displaytitle = <h3>{title}</h3>
            break
        case "h4":
            displaytitle = <h4>{title}</h4>
            break
        case "h5":
            displaytitle = <h5>{title}</h5>
            break
        case "h6":
            displaytitle = <h6>{title}</h6>
            break
        default:
            displaytitle = <h2>{title}</h2>
    }

    if (title) return displaytitle
}

// Returns String in uppercase depending on split and join
export const StringJoin = (string: string, split?: string, join?: string) => {
    return string.split(RenderLogic(split, "")).join(join).toUpperCase()
}