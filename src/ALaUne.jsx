const ALaUne = ({ cocktailsFromApi }) => {

    const randomCoktails = (Math.random() * cocktailsFromApi.length)
    const resulRandoom = cocktailsFromApi[randomCoktails]
    console.log(resulRandoom)
    return (

        <section className="containerALaUne">
            <h2 className="titreALaUne">COCKTAIL DU JOUR</h2>
            <ul>
                {cocktailsFromApi.map((randomCoktails) => {
                    return (
                        <>
                            {randomCoktails.isPublished && (
                                <div className="listeRecette">
                                    <h3>{randomCoktails.name}</h3>
                                    {/* <div className="imgBoissons"><img src={recette.img} alt={recette.name} /></div> */}
                                    <p>Prix :{randomCoktails.price} €</p>
                                    <p>Ingrédients :{randomCoktails.ingredients}</p>

                                </div>
                            )}
                        </>
                    );
                })}
            </ul>
        </section>

    )

}

export default ALaUne

