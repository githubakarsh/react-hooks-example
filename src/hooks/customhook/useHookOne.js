import {useEffect} from 'react';

const useHookOne = (
    currentAppTitle
) => {
    useEffect(() => {
        document.title = currentAppTitle;
    }, []);
}

export default useHookOne;