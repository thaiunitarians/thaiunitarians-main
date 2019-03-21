import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./style.css"

const headerLogo = require("../images/logo.png");

const Header = () => (

  <header className="header">
    <div className="headerMenu">
      <div>
        Home
      </div>
      <div>
        About Unitarianism
      </div>
      <div>
        Resources
      </div>
    </div>
    <img className="headerLogo" src={headerLogo}/>
    <div className="headerMenu">
      <div>
        Get Involved
      </div>
      <div>
        Blogs
      </div>
      <div>
        Contact
      </div>
    </div>
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
