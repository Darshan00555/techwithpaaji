"use client";

import { useEffect, useState } from "react";

export default function FloatingCTA() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        function onScroll() {
            // Show after scrolling down 200px
            setVisible(window.scrollY > 200);
        }
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <a
            href="https://wa.me/919773817031?text=Hi%20Paaji%20Connect%2C%20I%20need%20relationship%20advice%20%F0%9F%99%8F"
            target="_blank"
            rel="noopener noreferrer"
            className="floating-wa"
            aria-label="Chat on WhatsApp"
            style={{
                opacity: visible ? 1 : 0,
                pointerEvents: visible ? "auto" : "none",
                transition: "opacity 0.35s ease, transform 0.2s ease",
            }}
        >
            {/* WhatsApp SVG icon */}
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.363.627 4.608 1.72 6.56L2.667 29.333l6.933-1.693A13.27 13.27 0 0016.004 29.333c7.36 0 13.329-5.973 13.329-13.333S23.364 2.667 16.004 2.667zm0 24c-2.048 0-3.957-.533-5.6-1.467l-.4-.24-4.107 1.08 1.094-4-.267-.413A10.613 10.613 0 015.334 16c0-5.893 4.773-10.667 10.667-10.667S26.667 10.107 26.667 16 21.893 26.667 16.004 26.667zM22.4 19.04c-.32-.16-1.893-.933-2.187-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-.987 1.227-.16.187-.347.213-.667.053-.32-.16-1.347-.493-2.56-1.573-.947-.84-1.587-1.88-1.773-2.2-.187-.32-.02-.493.14-.653.147-.133.32-.347.48-.52.16-.173.213-.293.32-.507.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.267-.627-.533-.533-.72-.547-.187-.013-.4-.013-.613-.013a1.19 1.19 0 00-.853.4c-.293.32-1.12 1.093-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.253 3.44 5.467 4.827.76.333 1.36.533 1.827.68.773.24 1.467.2 2.013.12.614-.093 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.267-.213-.587-.373z" />
            </svg>
        </a>
    );
}
