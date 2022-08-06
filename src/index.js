import  {createRoot}  from 'react-dom/client';

import './index.css';
import App from './App';


/*
 * https://ko.reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html
 * react 17 -> 18 deprecate -> ms explore는 지원중단되어 17사용해야됨
 */
//ReactDOM.render(<App />, document.getElementById('root'));
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);