// PROPS
import {
  footerCopyrightProps,
  footerHeadingProps,
  footerSectionDataProps
} from "../SiteFooterProps";
// TOOLS
import { IfStatement, TernaryLogic } from "tools/FunctionTools";
import SiteIcon from "tools/SiteIcon";
import { SiteLink } from "tools/LinkTools";
import { StringJoin } from "tools/StringTools";

export const FooterHeading = (props: footerHeadingProps) =>
  IfStatement(<h3>{props.heading}</h3>);

export const FooterLogos = ({ icon, link }: footerSectionDataProps) => {
  const iconImage = <SiteIcon type={TernaryLogic(icon, "html")} size="2x" />;

  return (
    <div className="site-col-1">
      <SiteLink
        link={TernaryLogic(link, "")}
        placeholder={iconImage}
        type="external"
      />
    </div>
  );
};

export const FooterLinks = (props: footerSectionDataProps) => {
  const { external_link, link, span, title } = props;

  const FooterLink = (props: { input: any }) => (
    <div className={`site-col-${props.input} footer-link`} key={title}>
      <SiteLink
        link={`${TernaryLogic(external_link, `/${link}`)}`}
        type={external_link ? "external" : "local"}
        placeholder={StringJoin(title, "_", "")}
      />
    </div>
  );

  return (
    <>
      <FooterLink input={span} />
    </>
  );
};

export const FooterCopyRight = ({ name, year }: footerCopyrightProps) => (
  <div className="footer-copyright">
    &copy;{" "}
    <i>
      Designed by {name} {year}
    </i>
  </div>
);
