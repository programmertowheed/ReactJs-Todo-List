import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import PropTypes from "prop-types";

const FilterController = ({ handleFilter, filterSelect }) => {
  return (
    <ButtonGroup>
      <Button
        className={filterSelect == "all" ? "btnFactive" : ""}
        onClick={() => handleFilter("all")}
      >
        All
      </Button>
      <Button
        className={filterSelect == "running" ? "btnFactive" : ""}
        onClick={() => handleFilter("running")}
      >
        Running
      </Button>
      <Button
        className={filterSelect == "completed" ? "btnFactive" : ""}
        onClick={() => handleFilter("completed")}
      >
        Completed
      </Button>
    </ButtonGroup>
  );
};

FilterController.propTypes = {
  filterSelect: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default FilterController;
