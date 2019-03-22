import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const headerLogo = require("../images/logo.png");

const MenuItems = (language)=>{
  if (language==="th"){
    return{
      home: "หน้าหลัก",
      about: "เกี่ยวกับยูนิทาเรี่ยน",
      resources: "คลังข้อมูล",
      involved: "การมีส่วนร่วม",
      blog: "บล็อค",
      contact: "ติดต่อ",
      button: "English"
    }
  }else{
    return{
      home: "Home",
      about: "About Unitarianism",
      resources: "Resources",
      involved: "Get Involved",
      blog: "Blogs",
      contact: "Contact",
      button: "ภาษาไทย"
    }
  }
}

const Header = (props) => (

  <header className="header">
    <div className="headerMenu">
      <div>
        {MenuItems(props.language).home}
      </div>
      <div>
        {MenuItems(props.language).about}
      </div>
      <div>
        {MenuItems(props.language).resources}
      </div>
    </div>
    <img className="headerLogo" src={headerLogo}/>
    <div className="headerMenu">
      <div>
        {MenuItems(props.language).involved}
      </div>
      <div>
        {MenuItems(props.language).blog}
      </div>
      <div>
        {MenuItems(props.language).contact}
      </div>
    </div>
    <button className="headerLanguageButton" onClick={()=>{
      if (props.language === "en"){
        props.setLanguage("th");
      }else{
        props.setLanguage("en");
      }
    }}>
      {MenuItems(props.language).button}
    </button>
  </header>
)

// <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
