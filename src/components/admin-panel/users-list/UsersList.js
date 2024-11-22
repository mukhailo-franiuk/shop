import { useSelector } from "react-redux";
import {
    getAllUsers
} from '../../../store/users/UsersSlice';

export const UsersList = () => {
    const usersList = useSelector(getAllUsers);
    return (
        <div className="">

            <h2 class="mb-2 text-lg font-semibold text-gray-900">Top users:</h2>
            {Object.keys(usersList).map((item) =>
                <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside" key={item}>
                    <li>
                        <span class="font-semibold text-gray-900 ">{usersList[item]['name']}</span> Age : <span class="font-semibold text-gray-900"> {usersList[item]['age']}</span> year
                    </li>
                </ul>
            )}

        </div>
    )
}