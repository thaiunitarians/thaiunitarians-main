import React from "react"

import Header from "./header"
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
                <footer>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </>
        );
    }
}

export default Base;