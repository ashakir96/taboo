import words from "../Words";


export default function Card () {

    const list = () => {
        const word = words.map((word) => {
            for (let forbidden of word.forbidden) {
                return (
                    <div>{word.word}: {forbidden} </div>
                )
            }
        });
        return word;
    }

    return (
        <div> {list()} </div>
    )
}