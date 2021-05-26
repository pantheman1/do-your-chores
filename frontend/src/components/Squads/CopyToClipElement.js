import React from 'react';

const CopyToClipElement = ({ text }) => {
    const myRef = React.useRef(null);
    const [data, setData] = React.useState(text);
    React.useEffect(() => setData(text), [text]);
    React.useEffect(() => {
        if (myRef.current && data) {
            myRef.current.select();
            document.execCommand("copy");
            setData(null);
        }
    }, [data, myRef.current]);
    return (
        <div>{data && <textarea ref={myRef}>{data}</textarea>}</div>
    );
};

export default CopyToClipElement;