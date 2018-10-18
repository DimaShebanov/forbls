import Login from "./components/Login";
import Start from './components/Start';


export default [
    {
        path: '/login',
        key: 'login',
        component: Login,
    },
    {
        path: '/start',
        key: 'start',
        component: Start,
        isPrivate: true
    },
];
