type WelcomeCardProps = {
    name?: string;
}

export default function WelcomeCard(props: WelcomeCardProps) {
    // Providing a default value using logical OR
    const name = props.name || "Guest";
    
    return (
        <div className="border-2 border-blue-600 p-2.5">
            {/* <h2>Welcome, {props.name}!</h2> */}
            <h2>Welcome, {name}!</h2>
        </div>
    );
};