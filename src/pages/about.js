import React from "react";
import { Link } from "gatsby";
import { withTranslation } from 'react-i18next';

import Base from "../components/base"
import SEO from "../components/seo"
import "../components/style.css"

const AboutPage = (props) => {
    const {t, i18n, data} = props;

    return (
        <Base>
            <SEO title="About Unitarianism" keywords={[`thaiunitarians`, `unitarian`, `universalist`]} />

            <h1>{t("about:about.title")}</h1>
            <h2>{t("about:about.section1title")}</h2>
            <div className="text" dangerouslySetInnerHTML={{__html: t("about:about.section1content")}}/>

            <h2>{t("about:about.section2title")}</h2>
            <div className="text" dangerouslySetInnerHTML={{__html: t("about:about.section1content")}}/>
            <div>
                <p>
                Unitarianism encourages the individual quest for truth and religious freedom, equality and rational thought. We particularly value different beliefs and lifestyles, different cultures and ideas, and against any forms of discrimination including gender, age, race, religion, and sexual orientation. We value insights and teaching from all sources including the holy writings of any religions, scientific knowledge, arts, the natural world.
                </p>
                <p>
                Apart from a small set of common beliefs, there is really no solid description of Unitarian beliefs. In fact, we encourage each individual to foster their own personal belief through there own reasons and experience.
                </p>
                <p>
                <a href="https://www.unitarian.org.uk/" target="_blank">The General Assembly of Unitarians and Free Christian Churches</a>, the UK’s main Unitarian body, gives the following characteristics of a Unitarian:
                </p>
                <blockquote>
                    <ul>
                        <li> base beliefs on rational enquiry rather than external authority;</li>
                        <li> accept beliefs can change in the light of new understanding and insight;</li>
                        <li> form principles from conscience, thinking and life experiences;</li>
                        <li> hold reverence for the earth and the whole natural system of which we are part.</li>
                    </ul>
                </blockquote>
                <p>Unitarian Universalist Association gives the following descriptions of being a Unitarian Universalist:</p>
                <blockquote>
                    <p>In Unitarian Universalism, you can bring your whole self: your full identity, your questioning mind, your expansive heart.</p>
                    <p>Unitarian Universalists believe more than one thing. We think for ourselves, and reflect together, about important questions:</p>
                    <ul>
                        <li>The existence of a Higher Power</li>
                        <li>Life and Death</li>
                        <li>Sacred Texts</li>
                        <li>Inspiration and Guidance</li>
                        <li>Prayer and Spiritual Practices</li>
                    </ul>
                </blockquote>
            </div>
        </Base>
    )
}

export default withTranslation()(AboutPage);