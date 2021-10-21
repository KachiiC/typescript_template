import { RenderLogic } from "Tools/FunctionTools"

export const GoogleApiKey = "AIzaSyAC-vA8irZClKOO8zVMv4wyF3URfTe6HMA"

export const YoutubePlaylist = (playlist: string, results?: number) => {

    const resultsLogic = RenderLogic(results, 10)

    return `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlist}&key=${GoogleApiKey}&part=snippet,id&order=date&maxResults=${resultsLogic}`
}