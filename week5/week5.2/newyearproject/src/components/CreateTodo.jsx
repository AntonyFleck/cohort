
export function CreateTodo(){
    return <div>
        <input id="title" style={{padding:10,margin:5}} type="text" placeholder="title"></input>
        <input id="description" style={{padding:10,margin:5}} type="text" placeholder="description"></input>
        <button onClick={onclickhandler}>DONE</button>
    </div>
}
async function onclickhandler(){
    const value=await fetch("http://localhost:3002/todo",{method:"POST",
    mode:"cors",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
    },
    credentials: "same-origin",
    headers: {
        "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body:JSON.stringify({
        title:document.getElementById("title").value,
        description:document.getElementById("description").value
    })
});
    console.log(await value.json())
}

