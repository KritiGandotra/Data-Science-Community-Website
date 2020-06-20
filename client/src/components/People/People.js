import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import classes from "./People.module.css";

const People = (props) => {
  return (
    <React.Fragment>
      <div className={classes.members} data-aos="zoom-in-down">
        <img
          className={classes.photo}
          alt={props.name + " image"}
          src={require(`../../assets/images/team/${props.image}.jpg`)}
        />
        <br />
        <div className={classes.name}>
          {props.fname}
          <br />
          {props.lname}
        </div>
        <br />
        <div className={classes.role}>{props.role}</div>
        <div className={classes.links + " row mt-md-3"}>
          <div className="mx-auto text-right col-6">
            <a
              href={`https://github.com/${props.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
          </div>
          <div className="mx-auto text-left col-6">
            <a
              href={`https://linkedin.com/in/${props.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default People;
