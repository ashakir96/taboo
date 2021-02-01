import words from "../Words";


export default function Card () {

    const first = () => {
        for (let word of words) {
            return (
                word.word
            )
        }
    }

    return (
        <div> {first()} </div>
    )
}