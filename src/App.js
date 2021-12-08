import './App.css';
import MenuComponent from "./components/menu-component/Menu-component";
import { Switch, Route } from "react-router-dom";
import AboutComponent from "./about-component/about-component";
import HomeComponent from "./home-component/home-component";
import WorksComponent from "./works-component/works-component";
import PriceComponent from "./price-component/price-component";
import Footer from "./Footer/Footer";
function App() {


    return (
        <>
            <MenuComponent/>
            <Switch>
                <Route path="/works" component={WorksComponent}/>
                <Route path="/about" component={AboutComponent}/>
                <Route path="/price" component={PriceComponent}/>
                <Route path="/" component={HomeComponent}/>
            </Switch>
             <Footer/>
        </>
    );
}

export default App;
