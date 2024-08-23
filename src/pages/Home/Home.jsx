import Card from "../../components/Card/Card";
import "./Home.css"

const Home = () => {
    return (
        <div className="home">
            <Card image={"https://i.imgur.com/SYUo12h.jpeg"} statusCode={200}/>
            <Card image={"https://i.imgur.com/SYUo12h.jpeg"} statusCode={200}/>
            <Card image={"https://i.imgur.com/SYUo12h.jpeg"} statusCode={200}/>
            <Card image={"https://i.imgur.com/SYUo12h.jpeg"} statusCode={200}/>
            <Card image={"https://i.imgur.com/SYUo12h.jpeg"} statusCode={200}/>
            <Card image={"https://i.imgur.com/SYUo12h.jpeg"} statusCode={200}/>
        </div>
    )
}

export default Home;