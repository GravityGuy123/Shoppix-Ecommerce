type DynamicStylingProps = {
    badgeType?: string
}

export default function DynamicStyling(props: DynamicStylingProps) {
    const badgeType = props.badgeType || "Success"
    
    let bgColor;
    
    if (badgeType.toLowerCase() === "success") {
        bgColor = "bg-green-600";
    } else if (badgeType.toLowerCase() === "warning") {
        bgColor = "bg-yellow-400"
    } else {
        bgColor = "bg-red-600"
    }

    return (
        <section className={`${bgColor} p-4- py-1 px-2.5 m-2.5 rounded-lg`}>
            <h2>Badge Type:
                <span className="text-white font-bold"> {badgeType}</span> </h2>
        </section>
    )
}