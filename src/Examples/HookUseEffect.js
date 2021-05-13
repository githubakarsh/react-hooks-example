

import { useEffect } from 'react';

const AlertMessage = ({pageTitle}) => {

    /**
     * useEffect here is used for setting up a pageTitle when this page is loaded in browser,
     * pageTitle value is passed as a props here
     */
    useEffect(() => {
        document.title = pageTitle;
    })

    return <p style={{backgroundColor: '#f8d7da', color: '#721c24', borderColor: '#f5c6cb' }}>
        This is to notifiy that your payment is cancelled
    </p>
}

export default AlertMessage;
