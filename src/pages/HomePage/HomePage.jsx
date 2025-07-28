
import './HomePage.css'
import RecomendedComponent from '../../components/RecomendedComponent/RecomendedComponent';
import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SideBar/SideBar';
import SearchFilterBar from '../../components/SearchFilterBar/SearchFilterBar';
import BestOfferComponent from '../../components/BestOfferComponent/BestOfferComponent';

function HomePage() {



    return (
        <>
            <NavBar className="w-full" />
            <SideBar />


            <div className="content ml-80 p-4">
                <SearchFilterBar />
                <RecomendedComponent />
                <BestOfferComponent/>


            </div>
        </>
    )
}

export default HomePage