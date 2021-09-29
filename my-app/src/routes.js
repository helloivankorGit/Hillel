import SongsList from './components/pages/SongsList';
import SongInfo from './components/pages/SongInfo';
import Login from './components/pages/Login';
import About from './components/pages/About';


import { } from "module";

export const privateRoutes = [
  { path: '/songs', component: SongsList, exact: true, },
  { path: '/songs/:id', component: SongInfo, exact: true, },
  { path: '/about', component: About, exact: false, },
];

export const publicRoutes = [
  { path: '/login', component: Login, exact: true, },
];


// скопировал - ничего не менял