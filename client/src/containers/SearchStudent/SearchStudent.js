import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchStudentsResults,
  fetchStudentsQuickResults,
  resetResults,
  resetQuickResults
} from "../../store/actions/studentActions";

import classes from "./SearchStudent.css";
import Search from "../../components/App/Search/Search";
import Spinner from "../../components/UI/Spinner/Spinner";
import NotFound from "../../components/UI/NotFound/NotFound";
import Result from "./Result/Result";

const SearchStudent = ({ history }) => {
  const dispatch = useDispatch();

  const { results, quickResults, loading } = useSelector(
    ({ student }) => student
  );

  const [state, setState] = useState({
    query: "",
    focus: false,
    showSearch: false
  });

  const { query, focus, showSearch } = state;

  useEffect(() => {
    dispatch(fetchStudentsResults(query));
    return () => dispatch(resetResults());
  }, []);

  useEffect(() => {
    let [, path] = window.location.pathname.split("/");
    path = path.charAt(0).toUpperCase() + path.slice(1);
    document.title = `JZ Data Register - ${path}`;
  }, [window.location.pathname]);

  const onChange = e => {
    if (e.target.value) {
      dispatch(fetchStudentsQuickResults(e.target.value));
    } else {
      dispatch(resetQuickResults());
    }
    setState({ ...state, query: e.target.value });
  };

  const onKeyDown = e => {
    if (e.keyCode === 13) dispatch(fetchStudentsResults(query));
  };

  const onFocus = e => {
    setState({ ...state, focus: true });
  };

  const onBlur = e => {
    setTimeout(() => {
      setState(prevState => ({ ...prevState, focus: false }));
    }, 200);
  };

  const showSearchModal = () => {
    setState({ ...state, showSearch: true });
  };

  const closeSearchModal = () => {
    setState({ ...state, showSearch: false });
  };

  const onClick = name => {
    const [, path] = window.location.pathname.split("/");
    history.push(`/${path}-student/${name}`);
  };

  return (
    <Fragment>
      {showSearch ? (
        <Search
          onChange={onChange}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          onBlur={onBlur}
          value={query}
          path="student"
          close={closeSearchModal}
        />
      ) : (
        <i
          className={`fas fa-search ${classes.SearchIcon}`}
          onClick={showSearchModal}
        />
      )}

      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {results ? (
            <Fragment>
              {results.length > 0 ? (
                <Fragment>
                  <div className={classes.QuickResults}>
                    {focus ? (
                      <Fragment>
                        {quickResults.map(({ _id, name, photo }) => (
                          <Result
                            key={_id}
                            className={classes.QuickResult}
                            onClick={onClick}
                            photo={photo}
                            name={name}
                          />
                        ))}
                      </Fragment>
                    ) : null}
                  </div>

                  <div className={classes.Results}>
                    {results.map(({ _id, name, photo }) => (
                      <Result
                        key={_id}
                        className={classes.Result}
                        onClick={onClick}
                        photo={photo}
                        name={name}
                      />
                    ))}
                  </div>
                </Fragment>
              ) : (
                <NotFound msg="Nothing here, try another search" />
              )}
            </Fragment>
          ) : (
            <Spinner />
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default SearchStudent;
