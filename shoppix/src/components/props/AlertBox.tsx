import { ReactNode } from "react";

interface AlertBoxProps {
    type?: string;
    children: ReactNode;
}

export function AlertBox({type='info', children}: AlertBoxProps) {
    let bgColor;
    
    if (type.toLowerCase() === 'warning') {
        bgColor = 'bg-cyan-600'
    } else if (type.toLowerCase() === 'error') {
        bgColor = 'bg-red-600'
    } else {
        bgColor = 'bg-blue-600'
    }
    
    return (
        <section className={`${bgColor} bg-orange-300- text-white p-4 m-2.5 rounded-[8px]`}>
            {children}
        </section>
    )
}