interface UserProps {
    name?: string;
    address?: {
        city?: string,
        country?: string
    };
}

// Nested Destructuring
export function User(user: UserProps) {

    // Destructure from the user object
    const { name, address } = user;

    // Always guard optional nested objects
    const { city, country } = address || {};

    return(
        <section className="border-2 border-x-fuchsia-500 p-4 m-2.5 rounded-[8px]">
            <h1>{name}</h1>
            <p>{city}, {country}.</p>
        </section>
    )
}