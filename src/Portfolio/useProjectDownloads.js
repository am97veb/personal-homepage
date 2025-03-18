import { useState, useEffect } from "react"
import { fetchApiData } from "./fetchApiData"
import { sourceApiData } from "./sourceApiData";

export const useProjectsDownloads = () => {
    const [dataState, setDataState] = useState({ status: "loading", projectsData: [] })

    useEffect(() => {
        setTimeout(() => {
            (async () => {
                try {
                    const projects = await fetchApiData(sourceApiData);
                    setDataState({ status: "success", projectsData: projects });
                } catch (error) {
                    setDataState({ status: "error" });
                    console.error("Oooops! Something went wrong...", error);
                }
            })();
        }, 3000)
    }, [dataState]);

    return dataState;
};
