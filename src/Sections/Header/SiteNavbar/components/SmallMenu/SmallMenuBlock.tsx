import NavMenu from "../NavMenu"

const SmallllMenuBlock = (props: { data: any; click: any }) => {

    return (
        <div className="small-menu-block">
            <NavMenu data={props.data} 
                menu_type="small" click={props.click}
            />
        </div>
    )
}

export default SmallllMenuBlock