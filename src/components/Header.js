import { NavLink } from "react-router-dom";
import Button from "./Button";
import i18n from "../i18n/i18n";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";

const nav = [
  {
    value: "Home",
    id: 1,
    link: ""
  },
  {
    value: "Products",
    id: 2,
    link: "products"
  },
  {
    value: "Button Section",
    id: 3,
    link: "button-section"
  },
  {
    value: "Counter",
    id: 4,
    link: "counter"
  },
  {
    value: "Form",
    id: 5,
    link: "form"
  }
];

const Header = (params) => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    changeLanguage(language);
  }, [language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="App-header">
      <nav>
        <ul className="navList">
          {nav
            // .filter((item) => item.value === "Home")
            .map((li, index) => {
              return (
                <li className="navList_li" key={li.id}>
                  <NavLink
                    to={`/${li.link}`}
                    className={({ isActive }) =>
                      isActive ? "activeNav" : undefined
                    }
                  >
                    {t(li.value)}
                  </NavLink>
                  {/* <a href={`/${li.link}`}>{li.value}</a> */}
                </li>
              );
            })}
        </ul>
      </nav>
      <div className="lngDiv">
        <Button text={"English"} onClick={() => changeLanguage("en")} />
        <Button text={"ქართული"} onClick={() => changeLanguage("ka")} />
        <Button
          text={t("lngSwitch")}
          onClick={() =>
            language === "en" ? setLanguage("ka") : setLanguage("en")
          }
        />
      </div>
    </header>
  );
};

export default Header;
