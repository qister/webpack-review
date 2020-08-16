import * as $ from 'jquery'

import Post from '@models/Post.js'
import json from './assets/json.json'
import WebpackLogo from '@/assets/webpack-logo.png'
import xml from './assets/data.xml'
import csv from './assets/data.csv'

import React from 'react'
import { render } from 'react-dom'

import './babel'
import './styles/styles.css'
import './styles/less.less'
import './styles/scss.scss'

const post = new Post('Webpack post title', WebpackLogo)

// $('pre').addClass('code').html(post.toString())

const App = () => (
  <div className='container'>
    <h1>WebPack course</h1>

    <hr />

    <div className='logo'></div>

    <hr />

    <pre></pre>

    <hr />

    <div className='box'>
      <h2>Less</h2>
    </div>

    <div className='card'>
      <h2>Scss</h2>
    </div>
  </div>
)

render(<App />, document.getElementById('app'))

// console.log('Post to String', post.toString())
// console.log('JSON: ', json);
// console.log('XML', xml);
// console.log(('CSV', csv));
