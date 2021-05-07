import './Components.css'

const Learn = (props) => {
    return (
        <div className="card cyan">
            <h3>{props.title}</h3>
            <ul>
                <li>Ruby</li>
                <li>Blockchain</li>
                <li>Golang</li>
            </ul>
        </div>
    )
};

export default Learn