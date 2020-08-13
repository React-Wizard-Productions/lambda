import React from 'react';
import {render} from 'react-dom';

import Provider from "./providers/provider.component";
import App from './components/app.component';

render(<Provider><App /></Provider>, document.getElementById('root'));
