import React from 'react';
import { useEffect, useRef } from "react";

const useInterval = (callback, delay) => {
    // ref provides fresh state variables to setInterval below
    // each time, callback func updates the count / currImg, which must be shared with setInterval 
    // otherwise, setInterval will continue to reference the first img (0) + 1 every time
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay])
};

export default useInterval;