const AnecodeOfTheDay = ({anecdote}) =>{
    return(
        <div>    
            <h1>Anecdote of the day</h1>
            {anecdote}
        </div>
    )
}
const Points = ({Points}) =>{
    return(
        <div>
            has {Points} votes
        </div>
    )
}

const Selected = ({anecdote},{point}) =>{
    return (
        <>
         <AnecodeOfTheDay anecdote={anecdote}/>
         <Points Points={point}/>
        </>
    )
}
export default Selected;