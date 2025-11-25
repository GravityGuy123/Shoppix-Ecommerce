type UseCardProps = {
    name?: string;
    age?: number;
    email?: string;
}

export default function UserCard(props: UseCardProps) {
    const name = props.name || "Guest";
    const age = props.age || "Unspecified"
    const email = props.email || "Unspecified"

    return (
        <section className="border-2 p-4 m-2.5 rounded-[8px]">
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
        </section>
    )
}