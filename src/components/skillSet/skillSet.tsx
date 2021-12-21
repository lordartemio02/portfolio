
import * as React from "react";
import BlockSkillset from "./blockSkillset";
import imageHtml from "../../images/icon.png"

export default function SkillSet() {
    var texts = [
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, ullam sint molestias labore unde quaerat asperiores officia consequuntur accusamus voluptate, autem tempora voluptatum nisi dolores vitae, illo recusandae sapiente veritatis.",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, ullam sint molestias labore unde quaerat asperiores officia consequuntur accusamus voluptate, autem tempora voluptatum nisi dolores vitae, illo recusandae sapiente veritatis.",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, ullam sint molestias labore unde quaerat asperiores officia consequuntur accusamus voluptate, autem tempora voluptatum nisi dolores vitae, illo recusandae sapiente veritatis.",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, ullam sint molestias labore unde quaerat asperiores officia consequuntur accusamus voluptate, autem tempora voluptatum nisi dolores vitae, illo recusandae sapiente veritatis."
    ]
    return (
        <div>
            <div className="skillSet columns">
                <div className="column skillSet__firstColumn">
                    <p className="skillSet__firstColumn-title">Skillset</p>
                    <p className="skillSet__firstColumn-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi possimus sapiente esse quae repudiandae culpa molestiae nesciunt totam! Earum, quasi. Commodi perferendis eveniet, est velit temporibus corrupti reiciendis praesentium facere.</p>
                </div>
                <div className="column skillSet__blockColumn">
                    <BlockSkillset img={imageHtml} title="title" text={texts[0]}></BlockSkillset>
                    <BlockSkillset img={imageHtml} title="title" text={texts[1]}></BlockSkillset>
                </div>
                <div className="column  skillSet__blockColumn">
                    <BlockSkillset img={imageHtml} title="title" text={texts[2]}></BlockSkillset>
                    <BlockSkillset img={imageHtml} title="title" text={texts[3]}></BlockSkillset>
                </div>
            </div>
            <div className="skillSetSlide columns">
                <div className="column">
                    <img className="skillSetSlide-image" src={imageHtml}  alt="" />
                </div>
                <div className="column">
                    <img className="skillSetSlide-image" src={imageHtml} alt="" />
                </div>
                <div className="column">
                    <img className="skillSetSlide-image" src={imageHtml}  alt="" />
                </div>
                <div className="column">
                    <img className="skillSetSlide-image" src={imageHtml}  alt="" />
                </div>

            </div>
        </div>
    );
}
