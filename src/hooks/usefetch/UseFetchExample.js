import useHookOne from '../customhook/useHookOne';
import useFetch from './useFetch';

export const UseFetchExample = () => {
    
    useHookOne("Use Fetch Example");
    const uri = 'https://api.github.com/users';
    const obj = useFetch(uri);

    return <div>
        <p>Use Fetch Example file</p>
        <ul>{Array.isArray(obj.data) && obj?.data.map((user) => {
            return <li key={user.id}>{user.login}</li>
        })}</ul>

        {obj.error && <p>Something gone wrong !!!!</p>}
        {obj.loading && <p>Loading .....</p>}

    </div>
}