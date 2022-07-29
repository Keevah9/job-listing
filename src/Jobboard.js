import React from "react";

const Jobboard = ({ job }) => {
  const {
    role,
    location,
    contract,
    postedAt,
    level,
    position,
    featured,
    current,
    logo,
    company,
    id,
    languages,
    tools,
  } = job;
  
  return (
    <section className="main">
      <div className="imgContainer">
        <div className="imgCon">
          <img src={logo} alt={company} />
        </div>
        <div>
          <h3 className="brandCon brand">
            {company}

            {current && <span className="featuredBtn1 featuredBtn">New!</span>}

            {featured && <span className="featuredBtn"> Featured</span>}
          </h3>

          <h3 className="position">{position}</h3>
          
            <ul className="listDetails" key={id}>
              <li className="first">{postedAt}</li>
              <li>{contract}</li>
              <li>{location}</li>
            </ul>
          
        </div>
      </div>
      <div className="line"></div>
      <div className="toolCon">
        <h4>{role}</h4>
        <h4>{level}</h4>

        {[...languages, ...tools].map((job) => {
          return <h4>{job}</h4>;
        })}
      </div>
    </section>
  );
};
export default Jobboard;
