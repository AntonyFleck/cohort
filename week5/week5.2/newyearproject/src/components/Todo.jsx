export function Todo({params}){
    return <div>
        {
            params.map((value)=>{
                return(
                    <div>
                        <h1>{value.title}</h1>
                        <h2>{value.description}</h2>
                        <button>{value.completed}</button>
                    </div>
                )
            })
        }
    </div>
}