function ItemsForm ({elegante}) {

    return (
        <div className="products">
            {elegante.map((element=> {
                const {id,name, searchTerm, price, image} = element;
                console.log(element)
return (<div className="product-card" key={id} >
<p>{id}</p>
<img src={image} alt="cloth" width="400px" height="500px" />

<div className="product-info">
<h3>{name}</h3>
<h4>{searchTerm}</h4>
<h4>{price}</h4>
</div>
</div>
)

            }))}
        </div>
    )
}




export default ItemsForm;