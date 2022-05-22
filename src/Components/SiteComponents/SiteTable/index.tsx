// COMPONENTS
import SiteTableHeaders from "./components/TableHeaders";
import SiteTableRows from "./components/TableRows";
// CSS
import "./SiteTable.css";
// PROPS
import { SiteTableProps } from "./SiteTableProps";
// TOOLS
import { ArrrayObjectKeys } from "tools/ObjectDataTools";
import { TernaryLogic } from "tools/FunctionTools";

const SiteTable = ({ data, overflow, width }: SiteTableProps) => {
  const overflowStyle = () => {
    if (overflow) return "site-table-overflow";
  };

  return (
    <div
      className={`site-table-container ${overflowStyle()} w-${TernaryLogic(
        width,
        90
      )}`}
    >
      <table className="site-table">
        <SiteTableHeaders keys={ArrrayObjectKeys(data)} />
        <SiteTableRows data={data} />
      </table>
    </div>
  );
};

export default SiteTable;
