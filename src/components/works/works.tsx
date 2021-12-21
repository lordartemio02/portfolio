
import * as React from "react";
import BlockWorks from "./blockWorks";
import image from "../../images/img4.jpg";


export default function Works() {
    var title = ["first project", "second project", "thirty project", "forthy project"]
    var text = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sapiente animi, quibusdam quasi molestias aperiam alias nulla enim sed architecto praesentium doloremque quam assumenda voluptate rem libero numquam cumque earum?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sapiente animi, quibusdam quasi molestias aperiam alias nulla enim sed architecto praesentium doloremque quam assumenda voluptate rem libero numquam cumque earum?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sapiente animi, quibusdam quasi molestias aperiam alias nulla enim sed architecto praesentium doloremque quam assumenda voluptate rem libero numquam cumque earum?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sapiente animi, quibusdam quasi molestias aperiam alias nulla enim sed architecto praesentium doloremque quam assumenda voluptate rem libero numquam cumque earum?"]

    return (
        <section className="works columns">
            <div className="column">
                <p className="works-subtitle">
                    My projects
                </p>
                <p className="works-title">
                    Works thah i've done for the past 2 years
                </p>
                <BlockWorks img={image} title={title[0]} text={text[0]}  />
                <BlockWorks img={image} title={title[1]} text={text[1]}  />
            </div>
            <div className="column">
                <BlockWorks img={image} title={title[2]} text={text[2]}  />
                <BlockWorks img={image} title={title[3]} text={text[3]}  />
            </div>
        </section>
    )
}
