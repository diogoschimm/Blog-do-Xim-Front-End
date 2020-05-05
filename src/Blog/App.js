import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../Redux/Actions';

import Menu from './Layout/Menu';
import Header from './Layout/Header';   
import Footer from './Layout/Footer';   

function App(props) {
 
    console.log(props);

    return (
        <>
            <Menu />
            <Header /> 
            {(props.children)}
            <Footer />
        </>
    );
}

const mapStateToProps = state => ({ state: state.stateContents });
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App); 