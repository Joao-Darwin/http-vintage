import Card from "../../components/Card/Card";
import data from "../../data/data";
import "./Home.css"

const Home = () => {
    return (
        <div className="home">
           {data.map((value) => {
                return <Card image={value.url} statusCode={value.code}/>
           })}
        </div>
    )
}

export default Home;