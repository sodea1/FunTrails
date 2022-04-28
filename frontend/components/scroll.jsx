import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    // useLocation returns location object holding url
    const path = useLocation();

    // side effect
    // [path] is array of dependenceies - dictates when the function's called / like an event listener
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [path])

    return null;
}
