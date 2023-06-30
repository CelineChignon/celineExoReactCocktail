const Header = ({ userFromApi }) => {

    return (
        <header className="containerHeader">
            <nav className="containerNavbar">
                <div className="containerLogo">
                    <img src="/img/logo.png" alt="logo" />
                </div>
                <h1>Atelier Cocktails</h1>
                <ul className="navBarre">
                    <li>Accueil</li>
                    <li>Recette</li>
                    <li>Contact</li>
                    <li >Utilisateur:<p className="user"> {userFromApi.firstName} {userFromApi.lastName}</p></li>
                </ul>
            </nav>
            <div>

            </div>
        </header>
    )
}

export default Header           