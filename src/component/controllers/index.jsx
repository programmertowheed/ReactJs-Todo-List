import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchPanel from "./search-panel";
import {Row, Col} from 'reactstrap'
import FilterController from "./filter-controller";
import ViewController from "./view-controller";
import BulkController from "./bulk-controller";

const Controller = ({
  term,
  view,
  changeView,
  handleSearch,
  toggleForm,
  handleFilter,
  clearSelected,
  clearCompleted,
  reset,
  filterSelect
}) => {
  return (
    <div>
      <SearchPanel
        term={term}
        handleSearch={handleSearch}
        toggleForm={toggleForm}
      />
      <Row className="my-4">
        <Col md={{ size: 4 }}>
          <FilterController
            filterSelect={filterSelect}
            handleFilter={handleFilter}
          />
        </Col>
        <Col md={{ size: 4 }}>
          <ViewController
            filterSelect={filterSelect}
            view={view}
            changeView={changeView}
          />
        </Col>
        <Col md={{ size: 4 }} className="d-flex">
          <div className="ml-auto">
            <BulkController
              filterSelect={filterSelect}
              clearSelected={clearSelected}
              clearCompleted={clearCompleted}
              reset={reset}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

Controller.propTypes = {
  term: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  filterSelect: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  changeView: PropTypes.func.isRequired,
  clearSelected: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default Controller;
