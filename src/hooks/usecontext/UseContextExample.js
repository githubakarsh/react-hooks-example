
import useHookOne from '../customhook/useHookOne';

const addOnlineUsers = [
    {id: 1, name: 'John'},
    {id: 3, name: 'Paul'},
    {id: 3, name: 'Allan'},
];

export const UseContextExample = () => {
    useHookOne("useContext hook example");
    return <div>
        <h1>Use context example here</h1>
    </div>
}

