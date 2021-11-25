import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../modules/user/actions";
import styles from './styles.css'

const UserCard = () => {

    const [name, setName] = useState('')
    const dispatch = useDispatch()
    const newName = useSelector((state) => state.newName)

    const handleClick = () => dispatch(changeName(name))
    console.log(newName)
    console.log(name)
    return (
        <div>
            <h2>Username: {newName.name}</h2>

            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => handleClick()}>Change</button>
        </div>
    )
}

export default UserCard