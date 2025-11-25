type ProductCardProps = {
    name?: string;
    price?: number;
    inStock?: string;
}

export default function ProductCard(props: ProductCardProps) {
    const name = props.name || "Guest";
    const price = props.price || 0;
    const inStock = props.inStock || "Out of Stock";

    // Determine the text color based on stock status
    const stockTextColor = inStock.toLocaleLowerCase() === "available" ? "text-green-600" : "text-red-600"

    return (
        <section className="border-2 border-fuchsia-500 p-4 m-2.5 rounded-[8px]">
            <h3 className="text-fuchsia-500 font-bold">{name.toUpperCase()}</h3>
            <p>Price: ${price}</p>
            <p>Availability Status:
                <span className={stockTextColor}> {inStock}</span>
            </p>
        </section>
    )
}




// export default function ProductCard(props: ProductCardProps) {
//     const name = props.name || "Guest";
//     const price = props.price || 0;
//     const inStock = props.inStock || "Out of Stock";

//     // Determine the text color based on stock status
//     const stockTextColor = inStock.toLocaleLowerCase() === "available" ? "text-green-600" : "text-red-600"

//     return (
//         <section className="border-2 border-fuchsia-500 p-4 m-2.5 rounded-[8px]">
//             <h3 className="text-fuchsia-500 font-bold">{name.toUpperCase()}</h3>
//             <p>Price: ${price}</p>
//             <p>Availability Status:
//                 <span style={{color: inStock.toLowerCase() === "available" ? "green" : "red"}}> {inStock}</span>
//             </p>
//         </section>
//     )
// }