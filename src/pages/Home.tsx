import PubForm from '../components/PubForm';
import PubFeed from '../components/PubFeed';
import '../assets/css/home.css';

function Home(){
    return(
        <div className="parent">
            <div className="home-container">
                <PubForm />
                <PubFeed />
            </div>
        </div>
    );
}

export default Home;