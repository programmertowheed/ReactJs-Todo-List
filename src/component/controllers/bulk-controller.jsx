import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import PropTypes from "prop-types";

const BulkController = ({ clearSelected, clearCompleted, reset}) => {
  return (
    <ButtonGroup>
      <Button color="info" onClick={clearSelected}>
        Clear Selected
      </Button>
      <Button color="info" onClick={clearCompleted}>
        Clear Completed
      </Button>
      <Button color="info" onClick={reset}>
        Reset
      </Button>
    </ButtonGroup>
  );
};

BulkController.propTypes = {
  clearSelected: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default BulkController;
