import React, { Component } from "react";
import { Input, Button } from "reactstrap";
import PropTypes from "prop-types";

const SearchPanel = ({term,handleSearch, toggleForm}) =>{
    return (
      <div className="d-flex">
        <Input
          placeholder="Enter Search Term"
          className="mr-3"
          name="text"
          value={term}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Button color="success" onClick={toggleForm}>
          New
        </Button>
      </div>
    );
}

SearchPanel.propTypes = {
  term: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

export default SearchPanel;