import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./footer.css"

const footerItems = (language)=>{
    if (language==="th"){
        return {
            home: "หน้าหลัก",
            about: "เกี่ยวกับยูนิทาเรี่ยน",
            resources: "คลังข้อมูล",
            involved: "การมีส่วนร่วม",
            blog: "บล็อค",
            contact: "ติดต่อ",
            name: "กลุ่มยูนิทาเรี่ยนในประเทศไทย",
            copyright: (
                <>
                    <p>
                        <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-sa/4.0/">
                            <img alt="Creative Commons Licence" style={{borderWidth:0}} src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" />
                        </a>
                    </p>
                    <p>
                    เนื้อหาทั้งหมดบนเว็บไซต์นี้ใช้  &nbsp;
                        <a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">
                        สัญญาอนุญาตของครีเอทีฟคอมมอนส์แบบ แสดงที่มา-อนุญาตแบบเดียวกัน 4.0 International
                        </a>
                    </p>
                </>
            )
        }
    }else{
        return {
            home: "Home",
            about: "About Unitarianism",
            resources: "Resources",
            involved: "Get Involved",
            blog: "Blogs",
            contact: "Contact",
            name: "Unitarians in Thailand",
            copyright: (
                <>
                    <p>
                        <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-sa/4.0/">
                            <img alt="Creative Commons Licence" style={{borderWidth:0}} src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" />
                        </a>
                    </p>
                    <p>
                        This website and all its contents are licensed under a &nbsp;
                        <a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">
                            Creative Commons Attribution-ShareAlike 4.0 International License
                        </a>.
                    </p>
                </>
            )
        }
    }
}

const Footer = (props) =>(
    <footer className="footer">
        <div className="footerColumn">
            <ul className="footerMenu">
                <li>
                    <Link
                        to="/"
                        className="footerMenuItem"
                    >
                        {footerItems(props.language).home}
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className="footerMenuItem"
                    >
                        {footerItems(props.language).about}
                    </Link>
                </li>
                <li>
                    <Link
                        to="/resources"
                        className="footerMenuItem"
                    >
                        {footerItems(props.language).resources}
                    </Link>
                </li>
                <li>
                    <Link
                        to="/get-involved"
                        className="footerMenuItem"
                    >
                        {footerItems(props.language).involved}
                    </Link>
                </li>
                <li>
                    <Link
                        to="/blog"
                        className="footerMenuItem"
                    >
                        {footerItems(props.language).blog}
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        className="footerMenuItem"
                    >
                        {footerItems(props.language).contact}
                    </Link>
                </li>
            </ul>
        </div>
        <div className="footerColumn">
            <div className="copyright">
                <h5>
                    {footerItems(props.language).name}
                </h5>
                {footerItems(props.language).copyright}

            </div>
        </div>
    </footer>
)

export default Footer