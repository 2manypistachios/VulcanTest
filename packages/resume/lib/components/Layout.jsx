/* 

List of movies. 
Wrapped with the "withList" and "withCurrentUser" containers.

*/

import React from 'react';
import Helmet from 'react-helmet';
import {
  Components,
  replaceComponent,
  registerComponent
} from 'meteor/vulcan:core';

import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
//import 'bulma/bulma.sass'
fontawesome.library.add(solid)

import { Container, Hero, HeroBody, Title } from 'bloomer';

const Layout = ({ children, currentUser }) => (
  <div>
    <Helmet>
      {/*<link name="bootstrap" rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"/>*/}\
      <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.js"></script>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </Helmet>

    <Hero isColor='info' isSize='medium'>
      <HeroBody>
        <Container hasTextAlign='centered'>
          <Title>Maxim Podolski</Title>
        </Container>
      </HeroBody>
      {children}
    </Hero>
  </div>
);

replaceComponent('Layout', Layout);
