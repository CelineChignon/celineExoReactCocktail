const Recettes = ({ cocktailsFromApi }) => {

    return (

        <section className="containerRecettes">
            <h2 className="titreRecettes" >NOS RECETTES:</h2>

            {cocktailsFromApi.map((recette) => {
                return (
                    <>
                        {recette.isPublished && (
                            <div className="listeRecette">
                                <h3>{recette.name}</h3>
                                {/* <div className="imgBoissons"><img src={recette.img} alt={recette.name} /></div> */}
                                <p>Prix :{recette.price} €</p>
                                <p>Ingrédients :{recette.ingredients}</p>

                            </div>
                        )}
                    </>
                );
            })}

        </section>

    )
}
export default Recettes