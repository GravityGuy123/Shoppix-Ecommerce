type UserProfileProps = {
    name?: string;
    age?: number;
    location?: string;
    bio?: string;
}

// Props Method (Object Notation) // Not very recommended
export function Userprofile(props: UserProfileProps) {

    return (
        <section className="border-2 border-indigo-500 p-4 m-2.5 rounded-[8px]">
            <h2 className="text-indigo-500 font-bold">{props.name || "Guest"}</h2>
            <p>Age: {props.age || "Unspecified"}</p>
            <p>Location: {props.location || "Unspecified"}</p>
            <p>Bio: {props.bio || "Unspecified"}</p>
        </section>
    )
}


// Destructuring Method (More recommended especially 3+ props)
export function UserProfile({name, age, location, bio}: UserProfileProps) {

    return (
        <section className="border-2 border-fuchsia-500 p-4 m-2.5 rounded-[8px]">
            <h2 className="text-fuchsia-500 font-bold">{name || "Guest"}</h2>
            <p>Age: {age || "Unspecified"}</p>
            <p>Location: {location || "Unspecified"}</p>
            <p>Bio: {bio || "Unspecified"}</p>
        </section>
    )
}