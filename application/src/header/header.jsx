import './header.css'

const Header = ({title}) => {
    return (
        <div className="headerContainer">
            <h1>{ title }</h1>
        </div>
    )
}


export default Header