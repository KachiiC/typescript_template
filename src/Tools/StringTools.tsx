export const TitleTrimmer = (word: string, length: number) => {

    const output_word = word.length < length ? word : word.slice(0,length) + "..."

    return output_word
}

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
            displaytitle = <h2>title</h2>
    }

    if (title) return displaytitle
}

export const StringUppercase = (string: string) => {
    return string.split("_").join(" ").toUpperCase()
}