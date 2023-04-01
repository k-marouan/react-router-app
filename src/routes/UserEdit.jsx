import { useParams } from 'react-router-dom';

const UserEdit = () => {
    const param = useParams();
    console.log(param);
    return (
        <div>UserEdit</div>
    )
}

export default UserEdit