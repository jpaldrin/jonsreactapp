import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../../shared/components/PropsRoute";
import Home from "./home/Home";
import Job from "./job/Jobs";
import useLocationBlocker from "../../shared/functions/useLocationBlocker";

function Routing(props) {
  const { selectHome } = props;
  useLocationBlocker();
  return (
    <Switch>
      <PropsRoute
        exact
        path="/job"
        component={Job}
      />
      <PropsRoute path="/" component={Home} selectHome={selectHome} />
    </Switch>
  );
}

Routing.propTypes = {
 
  selectHome: PropTypes.func.isRequired,
  selectJob: PropTypes.func.isRequired,
};

export default memo(Routing);