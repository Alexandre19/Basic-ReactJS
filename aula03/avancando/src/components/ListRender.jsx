import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias"]);

    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Alexandre",
            age: 32,
        },

        {
            id: 2,
            name: "José",
            age: 45,
        },

        {
            id: 3,
            name: "Pedro",
            age: 25,
        },

    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    };

    return (
        <div>

            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age} anos
                    </li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    );
};

export default ListRender;