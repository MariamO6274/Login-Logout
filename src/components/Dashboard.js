import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";

function Dashboard(props) {

    const navigate = useNavigate();

    const goHomeHandel = () => {
        navigate("/");

    }
  return (
    <div>
      Welcome our website..!! Login was successfuly
      <br />
      <br />
      <button onClick={goHomeHandel}>Home</button>
    </div>
  );
}

// what are propTypes??
Dashboard.propTypes = {}

export default Dashboard
