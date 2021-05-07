import './Components.css'

const Hobbies = (props) => {
    return (
        <div className="card blue">
            <h3>{props.title}</h3>
            <ul>
                <li>Crossfit</li>
                <li>Books</li>
                <li>Soccer</li>
            </ul>
        </div>
    )
};

export default Hobbies