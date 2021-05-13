import {useEffect} from 'react';

const usePageTitle = (
    currentAppTitle
) => {
    useEffect(() => {
        document.title = currentAppTitle;
    }, []);
}

export default usePageTitle;