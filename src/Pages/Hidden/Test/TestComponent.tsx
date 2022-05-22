// COMPONENTS
// DATA
// import { TestData } from "./TestData";

import SiteModal from "components/SiteComponents/SiteModal";

export const TestComponent = () => {
  return (
    <>
      <SiteModal 
        component={<button>open me</button>}
        content={<h1>content</h1>}
        type="modal"
      />
    </>
  );
};
