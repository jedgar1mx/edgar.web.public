import { useState, useEffect } from 'react';

function UserWindow({ parentCallback }) {
    const [width, setWidth] = useState(null);
      
    useEffect(() => {
        // Update the document title using the browser API
        setWidth(document.body.clientWidth);
        parentCallback(width);
    });

    return '';
}

export default UserWindow;
