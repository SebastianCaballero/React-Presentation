import './Components.css'

const Interests = (props) => {
    return (
        <div className="card white">
            <h3>{props.title}</h3>
            <ul>
                <li>Physics</li>
                <li>Economy</li>
                <li>Cybersecurity</li>
            </ul>
        </div>
    )
};

export default Interests