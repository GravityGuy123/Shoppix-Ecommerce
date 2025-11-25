interface BookInfoProps {
  title?: string;
  author?: string;
  year?: string | number;
  genre?: string;
}

export function BookInfo({title, author, year, genre}: BookInfoProps) {

    return (
        <section className="border-2 border-x-lime-500 p-4 m-2.5 rounded-[8px]">
            <h1 className="text-lime-500">{title}</h1>
            <p>Author: {author}</p>
            <p>Year: {year}</p>
            <p>Genre: {genre}</p>
        </section>
    )
}