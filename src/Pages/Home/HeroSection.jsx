import React from "react";

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Belayneh</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Full Stack</span>{" "}
                        <br/> Developer
                    </h1>
                    <p className="hero--section--description"> <br/> I'm studying software engineering  at ASTU
                    <br/>I have great skill in web development</p>

                </div>
                <button className="btn btn-primary">Get I Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./images/photo1.png" alt="Nothing" />
            </div>
        </section>
    );
}