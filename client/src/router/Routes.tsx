import {createBrowserRouter} from "react-router-dom";
import App from "src/layout/App.tsx";
import Catalog from "src/features/catalog/Catalog.tsx";
import ProductDetail from "src/features/catalog/ProductDetail.tsx";
import AboutPage from "src/features/about/AboutPage.tsx";
import ContactPage from "src/features/contact/ContactPage.tsx";
import HomePage from "src/features/home/HomePage.tsx";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App/>,
            children: [
                {
                    path: '', element: <HomePage/>
                },
                {
                    path: 'catalog', element: <Catalog/>
                },
                {
                    path: 'catalog/:id', element: <ProductDetail/>
                },
                {
                    path: 'about', element: <AboutPage/>
                },
                {
                    path: 'contact', element: <ContactPage/>
                }
            ]
        }
    ]
)