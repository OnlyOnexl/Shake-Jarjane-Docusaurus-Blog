import React from 'react';

function IconDarkMode(props) {
    return (
        // <svg viewBox="0 0 13 12" width={14} height={14} {...props}>
        //     <path d="M10.7001 6.39501C10.6215 7.24611 10.3021 8.05721 9.77927 8.7334C9.25646 9.40959 8.55189 9.92291 7.748 10.2133C6.9441 10.5036 6.07414 10.5591 5.2399 10.3731C4.40565 10.187 3.64164 9.76728 3.03726 9.1629C2.43287 8.55851 2.01312 7.7945 1.8271 6.96026C1.64108 6.12602 1.6965 5.25605 1.98688 4.45216C2.27725 3.64826 2.79056 2.94369 3.46675 2.42088C4.14294 1.89808 4.95404 1.57866 5.80515 1.50001C5.30685 2.17414 5.06707 3.00473 5.12941 3.84071C5.19175 4.6767 5.55208 5.46254 6.14485 6.05531C6.73762 6.64808 7.52346 7.0084 8.35944 7.07074C9.19542 7.13308 10.026 6.8933 10.7001 6.39501Z" stroke="currentColor" fill="transparent" strokeLinecap="round" strokeLinejoin="round"/>
        // </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} {...props}><path d="M12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12c0-2.42-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6a6 6 0 0 1 6 6 6 6 0 0 1-6 6m8-9.31V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69Z"></path></svg>
    );
}

export default React.memo(IconDarkMode);
