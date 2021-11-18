// Sizes for grid system out of 12
export const GridSpanSwitcher = (input_size: 'xs'|'small'|'medium'|'large'|'xl' | undefined) => {
    
    var spanLogic

    switch(input_size) {
        case 'xs':
            spanLogic = 2
            break
        case 'small':
            spanLogic = 3
            break
        case 'medium':
            spanLogic = 4
            break
        case 'large':
            spanLogic = 6
            break
        case 'xl':
            spanLogic = 12
            break
        default:
            spanLogic = 3
    }

    return spanLogic
}

// grid template based on input number
export const GridStyle = (number: number) => {
    return {
        "gridTemplateColumns": `repeat(${number}, 1fr)`
    }
}