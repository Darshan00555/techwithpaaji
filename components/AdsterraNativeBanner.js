"use client";

import { useEffect, useRef } from "react";

export default function AdsterraNativeBanner() {
    const adRef = useRef(null);

    useEffect(() => {
        // Check if the script has already been injected to avoid duplicates on fast re-renders
        if (adRef.current && !adRef.current.querySelector("script")) {
            const script = document.createElement("script");
            script.async = true;
            script.setAttribute("data-cfasync", "false");
            script.src =
                "https://pl28792139.effectivegatecpm.com/d7600de71596b15f283e1744f09ae1a6/invoke.js";
            adRef.current.appendChild(script);
        }
    }, []);

    return (
        <div
            ref={adRef}
            className="my-10 flex w-full justify-center overflow-hidden rounded-lg bg-gray-50/50 p-2"
        >
            <div id="container-d7600de71596b15f283e1744f09ae1a6"></div>
        </div>
    );
}
