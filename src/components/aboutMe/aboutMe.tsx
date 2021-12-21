
import * as React from "react";
import image from "../../images/img4.jpg";
export const AboutMe = () => {
    return (
        <section className="aboutMe columns">
            <div className="aboutMe__leftside column">
                <p className="aboutMe__leftside-title">About me</p>
                <p className="aboutMe__leftside-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laboriosam libero quidem ducimus assumenda natus et perferendis provident, adipisci fugiat. Corporis itaque perferendis alias deserunt eum error. Quo, quod delectus.</p>
            </div>
            <div className="aboutMe__rightside column">
                <img src={image} alt="" />
            </div>
        </section>
    )
}
