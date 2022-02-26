import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth } from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import BuildIcon from "@material-ui/icons/Build";
import ComputerIcon from "@material-ui/icons/Computer";
import BarChartIcon from "@material-ui/icons/BarChart";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import CloudIcon from "@material-ui/icons/Cloud";
import MeassageIcon from "@material-ui/icons/Message";
import CancelIcon from "@material-ui/icons/Cancel";
import calculateSpacing from "./calculateSpacing";
import FeatureCard from "./FeatureCard";

const iconSize = 30;

const features = [
  {
    color: "#00C853",
    headline: "React",
    text:
      "React Tutorial using hooks. Full Stack dotnetcore web api contoso university.",
    icon: <BuildIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0"
  },
  {
    color: "#6200EA",
    headline: "MVC",
    text:
      "Build a complete MVC dotnetcore6 Entity Framework App",
    icon: <CalendarTodayIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200"
  },
  {
    color: "#0091EA",
    headline: "Razor Pages",
    text:
      "Learn complex razor Drop Down List and using child relationships in MVC - Advanced",
    icon: <MeassageIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
  }
];

function FeatureSection(props) {
  const { width } = props;
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          Video Tutorials
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width)}>
            {features.map(element => (
              <Grid
                item
                xs={6}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={
                  isWidthUp("md", width) ? element.mdDelay : element.smDelay
                }
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(FeatureSection);