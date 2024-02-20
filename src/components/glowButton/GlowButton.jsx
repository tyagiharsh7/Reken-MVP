import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import chroma from "chroma-js";
import "./GlowButton.css";

const GlowButton = ({ buttonText, sectionId, ariaLabel }) => {
    const buttonRef = useRef(null);

    useEffect(() => {
        const generateGlow = () => {
            const button = buttonRef.current;

            if (!button) return;

            // Create or access gradient element
            let gradientElem = button.querySelector(".gradient");
            if (!gradientElem) {
                gradientElem = document.createElement("div");
                gradientElem.classList.add("gradient");
                button.appendChild(gradientElem);
            }

            // Event listeners for mouse movement and click
            button.addEventListener("mousemove", (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                gsap.to(button, {
                    "--pointer-x": `${x}px`,
                    "--pointer-y": `${y}px`,
                    duration: 0.6,
                });

                gsap.to(button, {
                    "--button-glow": chroma
                        .mix(
                            getComputedStyle(button)
                                .getPropertyValue("--button-glow-start")
                                .trim(),
                            getComputedStyle(button)
                                .getPropertyValue("--button-glow-end")
                                .trim(),
                            x / rect.width
                        )
                        .hex(),
                    duration: 0.2,
                });
            });

            button.addEventListener("click", () => {
                const sectionElement = document.querySelector(sectionId);
                sectionElement.scrollIntoView({ behavior: "smooth" });
            });
        };

        generateGlow();

        window.addEventListener("resize", generateGlow);

        return () => window.removeEventListener("resize", generateGlow);
    }, []);

    return (
        <button className="glow-button" ref={buttonRef} aria-label={ariaLabel}>
            <span>{buttonText}</span>
        </button>
    );
};

export default GlowButton;
