import { useEffect } from "react";
// COMPONENTS
import { BackTop } from "antd";
import { useLocation } from "react-router";

export const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
};

export const AntdBackToTop = <BackTop />;
