import { ReactNode } from "react"

interface Card2Props {
    children: ReactNode
}

export function Card2({children}: Card2Props) {

    return (
        <section className="border-2 rounded-xl p-5 m-2.5 shadow-md">
            {children}
        </section>
    )
}