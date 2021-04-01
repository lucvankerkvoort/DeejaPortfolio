import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQElS8aUpkmCTw/profile-displayphoto-shrink_800_800/0/1523849431107?e=1622678400&v=beta&t=Q1DeeJCVVnNEdK3OUu1VHXenGyfGzk3jKuTKvBmdmmk"
              alt=""
            />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Info</h2>
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map((item) => {
                    return (
                      <a href={item.url} target="_blank">
                        <i className={item.className} />
                      </a>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
