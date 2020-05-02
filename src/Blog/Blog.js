import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../Redux/Actions';

import Menu from './Components/Menu';
import Header from './Components/Header';   
import Footer from './Components/Footer';   

function Blog({children}) {
 
    return (
        <Fragment>
            <Menu />
            <Header /> 
            {(children)}
            <Footer />
        </Fragment>
    );
}

const mapStateToProps = state => ({ state: state.stateContents });
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Blog); 