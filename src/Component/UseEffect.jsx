import { useEffect, useState } from "react";

function UseEffect() {
    const [counter, setCounter] = useState(0);
    const [gitUsers, setGitUsers] = useState([]);
    async function getGitHubUsersData() {
        let response = await fetch("https://api.github.com/users");
        let data = await response.json();
        console.log(data);
        setGitUsers(data);
    }
    useEffect(() => {
        getGitHubUsersData();
    },[]);
    useEffect(() => {
        console.log("USE EFFECT TWO IS CALLED HWN COUNTER VARIABLE STATE IS CHANGED!");
    }, [counter]);
    return(
        <>
            <button onClick={() => setCounter(counter <= 0 ? 0 : counter - 1)}>Minus</button>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Add</button>
            {
                gitUsers.map((user) => {
                    return <>
                    <img src={user.avatar_url} />
                    <h1 key={user.login}>{user.login}</h1>
                    </>
                })
            }
        </>
    )
}
export default UseEffect;