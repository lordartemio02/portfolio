
import * as React from "react";


export default function BlockWorks({img,title,text}) {
    return (
        <div className="blockWorks">
            <img src={img} alt="" className="blockWorks-image" />
            <p className="blockWorks-title">
                {title}
            </p>
            <p className="blockWorks-text">
                {text}
            </p>
        </div>
        )
  }
