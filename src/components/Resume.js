import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>
          <div className="ten columns flex-container">
            <div className="flexslider">
              <ul className="slides">
                {resumeData.work &&
                  resumeData.work.map((item) => {
                    return (
                      <li>
                        <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                            {item.specialization}
                            <span>&bull;</span>{" "}
                            <em className="date">
                              {item.MonthOfLeaving} {item.YearOfLeaving}
                            </em>
                          </p>
                          <p>{item.Achievements}</p>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>{" "}
            {/* div.flexslider ends */}
          </div>{" "}
          {/* div.flex-container ends */}
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skill Set</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.skills.map((item) => {
              return (
                <>
                  <p>{item.skillsDescription}</p>

                  <div className="bars">
                    <ul className="skills">
                      {item.skills &&
                        item.skills.map((item) => {
                          return (
                            <li>
                              <span
                                className={`bar-expand ${item.skillname.toLowerCase()}`}
                              />
                              <em>{item.skillname}</em>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1 style={{ whiteSpace: "nowrap" }}>
              <span>Tools & Technologies </span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.tools.map((item) => {
              return (
                <>
                  <p>{item.skillsDescription}</p>

                  <div className="bars">
                    <ul className="skills">
                      {item.skills &&
                        item.skills.map((item) => {
                          return (
                            <li>
                              <span
                                className={`bar-expand ${item.skillname.toLowerCase()}`}
                              />
                              <em style={{ whiteSpace: "nowrap" }}>
                                {item.skillname}
                              </em>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    );
  }
}
