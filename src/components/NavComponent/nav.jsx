import Button from "../Button/Button.jsx";

const Nav =(  )=>{
    return (
        <nav className="navContainer">
            <h1 className="logo"><a href="">logo</a></h1>
            <div className="navLinks">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Schedules</a>
                <a href="#">Contuct</a>
                <a href="#">Resoures</a>
            </div>
            <div>
            </div>
            <div >
                <input type="text" />
                <Button innerText ="login"className="loginBtn"/>
            </div>
        </nav>
    )
}
export default Nav;