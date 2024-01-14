const ProductBtn = ({value, onClickButtons}) => {
    const categories = ['рыба', 'кальмары', 'крабы']

    return ( 
        <div className="product-category-tabs row">
            {categories.map((categoryName, i) =>(
                <li
                    key={i}
                    onClick={() => onClickButtons(i)}
                    className="product-category-btn"><button className={value === i ? 'active' : ''}>{categoryName}</button>
                </li>
            ))}
        </div>
     );
}
 
export default ProductBtn;