import React from "react";
import { LinkMenuType } from "../types/menus";

class LinkButton extends React.Component<LinkMenuType>{
    render(){
        return <div className="hidden hover:scale-[1.2]  hover:rounded-md hover:px-2 transition-all group-hover:inline-flex">{this.props.text}</div>
    }
}

export default LinkButton