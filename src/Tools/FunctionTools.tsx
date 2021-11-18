// If argument exists, returns argument
export const IfStatement = (arg: any) => {
    if (arg) return arg
}

// if argument 1 returns argument 1, else its argument 2 is given as default.
export const RenderLogic = (arg1: any, arg2: any) => arg1 ? arg1 : arg2