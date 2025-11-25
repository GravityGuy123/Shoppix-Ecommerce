import { ReactNode } from "react";

interface CardProps {
    // children?: ReactNode // Children is optional
    children: ReactNode; // Children is required
}

export default function Card({children}: CardProps) {

    return(
        <section className="border-2 border-t-fuchsia-500 border-r-green-500 border-b-indigo-500 border-l-red-500 border-[lightgray]- rounded-[8px] shadow-md p-4 m-2.5">
            {children}
        </section>
    )
}


// children?: ReactNode // Children is optional (No error and program still runs if children isn't passed)
// children: ReactNode; // Children is required (would throw an error if children isn't passed.)