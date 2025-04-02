import { useState, useEffect } from "react";

export const useDisabledTransition = () => {
    const [disabledTransition, setDisabledTransition] = useState(true);

    useEffect(() => {
        setDisabledTransition(false);
    }, [])
    return disabledTransition;
}