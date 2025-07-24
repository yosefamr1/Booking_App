
import './HomePage.css'
import RecomendedComponent from '../../components/RecomendedComponent/RecomendedComponent';
import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SideBar/SideBar';

function HomePage() {

    

    return (
        <>
                <NavBar className="w-full" />
                <SideBar/>


            <div className="content ml-80 ">               
                <RecomendedComponent/>


            </div>
        </>
    )
}

export default HomePage