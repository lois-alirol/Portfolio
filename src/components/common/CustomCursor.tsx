
"use client";

import React, { useEffect, useRef } from "react";
import "@/styles/components/common/CustomCursor.css";

const CustomCursor: React.FC = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;

        let mouse = { x: 0, y: 0 };
        const follower = { x: 0, y: 0 };
        let rafId: number;

        const handleMouseMove = (e: MouseEvent) => {
            mouse = { x: e.clientX, y: e.clientY };

            const target = e.target as HTMLElement;
            const hovering = !!target.closest(
                '[data-cursor="pointer"], a, button'
            );

            dotRef.current!.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`;
            dotRef.current!.classList.toggle("hovering", hovering);
            followerRef.current!.classList.toggle("hovering", hovering);
        };

        const animate = () => {
            follower.x += (mouse.x - follower.x) * 0.15;
            follower.y += (mouse.y - follower.y) * 0.15;

            followerRef.current!.style.transform = `translate(${follower.x}px, ${follower.y}px)`;

            rafId = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMouseMove);
        rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    if (typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
        return null;
    }

    return (
        <>
            <div ref={dotRef} className="cursor-dot" />
            <div ref={followerRef} className="cursor-follower" />
        </>
    );
};

export default CustomCursor;
