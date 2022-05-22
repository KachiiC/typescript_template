import { useEffect, useReducer, useState } from "react";
// CSS
import { Empty, Spin } from "antd";
// PROPS
import { SiteRenderProps } from "props/Tools/ToolProps";

// Fetchs data from api
export const SiteFetcher = (url: string, argument?: string) => {
  const [response, setResponse] = useState([]);
  const [loading, toggleLoading] = useReducer((loading) => !loading, true);
  const [error, setError] = useReducer((error) => !error, false);

  useEffect(() => {
    if (response.length === 0) {
      fetch(url)
        .then((responseData) => responseData.json())
        .then((responseJson) => {
          setResponse(argument ? responseJson[`${argument}`] : responseJson);
          toggleLoading();
        })
        .catch((error) => {
          setError();
          toggleLoading();
          console.log(error);
        });
    }
  }, [url, argument, response]);

  return {
    response,
    loading,
    error
  };
};

// Site Render while fetching
export const SiteRender = (props: SiteRenderProps) => {
  const { component, fetch } = props;

  const { error, loading } = fetch;

  const displayLogic = loading ? <Spin /> : error ? <Empty /> : component;

  return <>{displayLogic}</>;
};
