/**
 * Custom Apps in order to provide context
 * Because blocks need to know weather to use wp-element or react-element lib
 */

import React from 'react';
import App from 'next/app';

import SiteContext from '../components/SiteContext';
import context from '../utils/site-context';

class TilApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    console.log ('via til app');

    return (
        <SiteContext.Provider value={context}>
            <Component {...pageProps} />
        </SiteContext.Provider>
    );
  }
}

export default TilApp;