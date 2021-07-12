import React from 'react';
import ReactDOM from 'react-dom';
import { GifExpertApp } from './GifExpertApp';

import './index.css';

const token = document.getElementById('valor').getAttribute('value');

ReactDOM.render(
    

    <GifExpertApp valor = { token }/>,
   document.getElementById('root')
);

