
import * as React from "react";


export default function BlockSkillset({title,text,img}) {
    return (
        <div className="blockSkillset">
            <img className="blockSkillset-image" src={img}  />
            <p className="blockSkillset-title">
                {title}
            </p>
            <p className="blockSkillset-text">
                {text}
            </p>

        </div>
        )
  }
