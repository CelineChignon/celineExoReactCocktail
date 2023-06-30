const Profile = ({ userFromApi }) => {

    return (
        <div className="containerProfile">
            <ul className="userList">
                <li className="userProfil">Bonjour <p className="user"> {userFromApi.firstName} {userFromApi.lastName}</p></li>
                <li>Votre age : {userFromApi.age} ans </li>
                <li>Email :{userFromApi.email}</li>
                <li>Téléphone :{userFromApi.phone}</li>
                <li>Adresse :{userFromApi.adress} </li>
                <li>Ville :{userFromApi.zipCode} {userFromApi.city}</li>
                <li>Emploi :{userFromApi.job}</li>
            </ul>

        </div>
    )
}

export default Profile         