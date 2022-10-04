import React from "react";
import { LinkMenuType } from "../types/menus";

class LinkButton extends React.Component<LinkMenuType>{
    render(){
        return <div className="hidden hover:scale-[1.5]  hover:rounded-md hover:px-2 hover:bg-blue-400 hover:text-white transition-all group-hover:inline-flex">{this.props.text}</div>
    }
}


export default LinkButton