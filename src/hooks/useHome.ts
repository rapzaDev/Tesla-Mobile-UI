import { useState } from "react";
import { carsData } from "./data";

function useHome() {
    const [ cars, setCars ] = useState(carsData);

    return {cars};
};

export default useHome;