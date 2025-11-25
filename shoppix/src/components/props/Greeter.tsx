type GreeterProps = {
    username?: string;
    age?: number;
}

const Greeter = ({username = "Guest", age}: GreeterProps) => {

    return (
        <section>
            <h1>Hello {username}!</h1>
            {age && <p>You are {age} years old</p>}
        </section>
    )
}

export { Greeter };


// const Greeter2 = ({ username = "Guest", age }) => {
    
//   return (
//     <section>
//       <h1>Hello {username}!</h1>
//       {age && <p>You are {age} years old</p>}
//     </section>
//   );
// };

// export default Greeter2;