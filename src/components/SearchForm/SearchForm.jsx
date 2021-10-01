import { useState } from "react";
import {
  SearchBars,
  SearchForms,
  SearchFormButton,
  SearchFormBtnLabel,
  SearchFormInput,
} from "./SearchForm.styled";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

export const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handeleOnChange = (e) => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  const handeleBtnSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      console.log("Please enter correct query and try again.");
      toast.error("Input search query");
      return;
    }

    onSearch(query);

    resetForm();
  };

  const resetForm = () => setQuery("");

  return (
    <SearchBars>
      <SearchForms onSubmit={handeleBtnSubmit}>
        <SearchFormButton type="submit">
          <SearchFormBtnLabel>Search</SearchFormBtnLabel>
        </SearchFormButton>

        <SearchFormInput
          className="SearchForm-input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search movies"
          onChange={handeleOnChange}
        />
      </SearchForms>
    </SearchBars>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};
