import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Rating from "@material-ui/lab/Rating";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-social/bootstrap-social.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import "./Title.css";
export default function Title() {
  return (
    <div>
      <div class="row">
        <div class="col">
          <div class="row">
            <div>
              <ArrowBackIcon style={{ marginTop: "25px" }} />
            </div>
            <img
              src="https://cdn.indiawealth.in/public/images/grp_45.png"
              alt="logo"
              style={{
                width: "60px",
                height: "60px",
                marginTop: "10px",
                marginLeft: "15px",
                marginRight: "15px"
              }}
            />
            <div class="row">
              <p class="col" style={{ fontSize: "25px" }}>
                {" "}
                HDFC Limited
                <br /> <span style={{ fontSize: "15px" }}>FAAA</span>
                <span style={{ marginLeft: "10px" }}>
                  <Rating name="size-small" defaultValue={5} size="small" />{" "}
                </span>
              </p>{" "}
              <br />
            </div>
          </div>
        </div>
        <div className="Center" align="center">
          <button type="button" class="btn btn-primary btn">
            DEPOSIT NOW
          </button>
        </div>
      </div>
      <div className="row">
        <TwitterIcon
          style={{
            color: "white",
            backgroundColor: "#1DA1F2",
            borderRadius: "50%",
            width: "40px",
            height: "35px",
            marginLeft: "20px",
            marginRight: "15px"
          }}
        />
        <LinkedInIcon
          style={{
            color: "white",
            backgroundColor: "#0e76a8",
            borderRadius: "50%",
            width: "40px",
            height: "35px",
            marginRight: "15px"
          }}
        />
        <WhatsAppIcon
          style={{
            color: "white",
            backgroundColor: "#25D366",
            borderRadius: "50%",
            width: "40px",
            height: "35px"
          }}
        />
      </div>
    </div>
  );
}
