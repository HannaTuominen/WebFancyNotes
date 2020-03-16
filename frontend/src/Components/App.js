import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Layouts'
 import Note from './Note'
import { render } from '@testing-library/react'

export default class extends Component {
  render() {
    return <Fragment>
      <Header/>
        <Note/>
      <Footer/>
    </Fragment>
  }
}