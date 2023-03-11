import "./Card.css";
import mailIcon from "../../image/mail_icon.png";
import twitterIcon from "../../image/twitter_icon.png";
import facebookIcon from "../../image/facebook_icon.png";
import instagramIcon from "../../image/instagram_icon.png";
import linkedinIcon from "../../image/linkedin_icon.png";
import githubIcon from "../../image/github_icon.png";

// props from data.json
function Card(props) {
  const mail = "mail: " + props.email;

  return (
    <div className="card">
      <div className="card--header">
        <img src={props.avatar} alt="" />
      </div>
      {/* body */}
      <div className="card--body">
        {/* profile */}
        <div className="profile">
          <h1>{props.fullName}</h1>
          <p>{props.title}</p>
          <a href="">
            {props.fullName.toLowerCase().replace(/\s/g, "")}.website
          </a>
          <a href={mail}>
            <button>
              <img src={mailIcon} />
              Email
            </button>
          </a>
        </div>
        {/* information */}
        <div className="info">
          <h3>About</h3>
          <p>{props.about}</p>
        </div>
        <div className="info">
          <h3>Interests</h3>
          <p>{props.interests}</p>
        </div>
      </div>
      {/* footer */}
      <div className="card--footer">
        <a href="">
          <img src={twitterIcon} alt="" />
        </a>
        <a href="">
          <img src={facebookIcon} alt="" />
        </a>
        <a href="">
          <img src={instagramIcon} alt="" />
        </a>
        <a href="">
          <img src={linkedinIcon} alt="" />
        </a>
        <a href="">
          <img src={githubIcon} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Card;
