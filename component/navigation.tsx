"use client"; 

import styles from "../styles/navigation.module.css"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { use, useState } from "react";

export default function Navigation() {
    const path = usePathname();
    // const [count, setCount] = useState(0);
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
                </li>
                <li>
                    <Link href="/about-us">About Us</Link> {path === "/about-us" ? "🔥" : ""}
                </li>
                {/* <li>
                    <button onClick={()=>setCount((c)=>c+1)}>{count}</button>
                    <button onClick={()=>setCount(0)}>초기화</button>      
                </li> */}
            </ul>
        </nav>
    )
    }