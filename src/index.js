import ReactDom from 'react-dom'
import React from 'react';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { CVpages} from './CVpages.js';
import './css/main.css'

const html = document.getElementById("html")

ReactDom.render(<CVpages/> , html)

serviceWorkerRegistration.register();
