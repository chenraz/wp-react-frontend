import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import Router from 'next/router';
import WPAPI from 'wpapi';

import { withRedux } from '../local-react-components/store/withRedux';
import Layout from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import Menu from '../components/Menu';
import Config from '../config';


import {Block} from '@tilnet/react-components';
import WPGBlocks from 'react-gutenberg';

// import GetCustomBlock from '../local-react-components';
import GetCustomBlock from '../local-react-components/blocks';
// import {MouseContext} from '../local-react-components/elements/mouseNavigation'
import {MouseContext} from '../local-react-components/components/mouseNavigation';
import loadable from '@loadable/component';

// const Wellcome = loadable(() => import('./wellcome'));

// console.log('testing now');

var apiRootJSON = require( '../utils/wp-json.json' );



const wp = new WPAPI({ 
  endpoint: Config.apiUrl,
  routes: apiRootJSON.routes
});

const headerImageStyle = {
  marginTop: 50,
  marginBottom: 50,
};

const tokenExpired = () => {
  if (process.browser) {
    localStorage.removeItem(Config.AUTH_TOKEN);
  }
  wp.setHeaders('Authorization', '');
  Router.push('/login');
};

const PageConent = (props) => {

  // console.log ('pageContent', props);
  const {content} = props;

  const myBlocks = {Block};
  const blockName = "Block";
  const Type = myBlocks[blockName];

  return (
    <div
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{
      __html: content,
    }}
  />    
  );

}

class Index extends Component {
  state = {
    id: '',
  };

  static async getInitialProps() {
    try {
      const page = await 
          wp
            .pages()
            .slug('welcome')
            .then((pages) => {
              // console.log ('the page: ', pages[0]);
              return pages[0]; 
            });

      return {page};      

    } catch (err) {
      console.log('err',err);
      if (err.data.status === 403) {
        tokenExpired();
      }
    }

    return null;
  }

  componentDidMount() {
    const token = localStorage.getItem(Config.AUTH_TOKEN);
    if (token) {
      wp.setHeaders('Authorization', `Bearer ${token}`);
      wp.users()
        .me()
        .then(data => {
          const { id } = data;
          this.setState({ id });
        })
        .catch(err => {
          if (err.data.status === 403) {
            tokenExpired();
          }
        });
    }
  }

  render() {
    const { id } = this.state;
    const { headerMenu, page } = this.props;

    const Blocks = ({blocks}) => (
      <MouseContext>
            <WPGBlocks blocks={blocks} mapToBlock={GetCustomBlock} />        
      </MouseContext>  
    );

    return (
      <Layout>
        <Menu menu={headerMenu} />
        <img
          src="/static/images/wordpress-plus-react-header.png"
          width="815"
          alt="logo"
          style={headerImageStyle}
        />
        <h1>{page.title.rendered}</h1>

        <PageConent content = {page.content.rendered} />

        <h2>Trying WPGBlocks</h2>
        {/* <WPGBlocks blocks={page.blocks} mapToBlock={GetCustomBlock} />         */}
        <Blocks blocks={page.blocks} />        

        <h2>My sepcific block2:</h2>
        <Block test="can be changed dynamically"/>

        {id ? (
          <div>
            <h2>You Are Logged In</h2>
            <p>
              Your user ID is <span>{id}</span>, retrieved via an authenticated
              API query.
            </p>
          </div>
        ) : (
          <div>
            <h2>You Are Not Logged In</h2>
            <p>
              The frontend is not making authenticated API requests.{' '}
              <a href="/login">Log in.</a>
            </p>
          </div>
        )}
        <h2>Where You're At</h2>
        <p>
          You are looking at the REST API-powered React frontend. Be sure to
          also check out the{' '}
          <a href="http://localhost:3001/">GraphQL-powered frontend</a>.
        </p>
      </Layout>
    );
  }
}

export default withRedux(PageWrapper(Index));
