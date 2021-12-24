import { useEffect } from "react"
// COMPONENTS
import { BackTop } from "antd"
import { useLocation } from "react-router"
// CSS
import "antd/dist/antd.css"

export const ScrollToTop = (props: { children: undefined; }) => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  

  return <>{props.children}</>
}

export const AntdBackToTop = <BackTop />