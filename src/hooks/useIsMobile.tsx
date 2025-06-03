'use client';

import { useEffect, useState } from "react";

const useIsMobile = (breackpoint: number = 600) => {
    const isClient = typeof window !== "undefined";

    const [isMobile, setIsMobile] = useState<boolean>(
        isClient ? window.innerWidth <= breackpoint : false
    )
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= breackpoint)
        };

        handleResize();

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [breackpoint]);
    
    return isMobile;
}

export default useIsMobile;