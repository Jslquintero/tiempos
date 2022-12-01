import {
    Home,
    Cart,
    About,
    ConfirmPayment,
    PaymentSuccess,
    Product,
    UserLogin,
    UserRegister
} from './Pages';

const routes = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/cart',
        element: <Cart/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/payment',
        element: <ConfirmPayment/>
    }, 
    {
        path: '/payment-success',
        element: <PaymentSuccess/>
    }, 
    {
        path: '/product',
        element: <Product/>
    }, 
    {
        path: '/user-login',
        element: <UserLogin/>
    }, 
    {
        path: '/user-register',
        element: <UserRegister/>
    }
];

export default routes;
