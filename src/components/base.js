import React from "react"
import i18n from "../i18n"

import Header from "./header"
import Footer from "./footer"
import Layout from './layout'

class Base extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            language: 'en',
        };

        this.actions = {
            setLanguage: this.setLanguage
        }
    }

    setLanguage = (language)=>{
        this.setState({
            language: language
        });
    }

    render(){
        return (
            <>
                <Header {...this.state} {...this.actions}/>
                <Layout>
                    {this.props.children}
                </Layout>
                <Footer {...this.state} {...this.actions}/>
            </>
        );
    }
}

export default Base;