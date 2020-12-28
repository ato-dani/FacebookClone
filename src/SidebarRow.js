import React from 'react';
import { Avatar } from '@material-ui/core';
import "./SidebarRow.css";
function SidebarRow({title, src, Icon, htmlColor}) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src}/>}
            {Icon && <Icon htmlColor={htmlColor}/> }
            <p>{title}</p>

        </div>
    )
}

export default SidebarRow
