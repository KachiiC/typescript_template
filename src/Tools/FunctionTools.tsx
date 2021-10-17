import { MouseEventHandler } from "react"

export const IfStatement = (arg: MouseEventHandler<HTMLDivElement> | undefined) => {
    if (arg) return arg
}

export const RenderLogic = (arg1: any, arg2: any) => arg1 ? arg1 : arg2