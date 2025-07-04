'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CiCircleChevUp } from "react-icons/ci";

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        setIsVisible(window.scrollY > 500)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const jumpAnimation = {
        y: [0, -10, 0, -10, 0],
        transition: {
            y: {
                duration: 0.7,
                ease: 'easeOut',
                repeat: 1,
            },
        },
    }

    return (

        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.4 }}
            className="custom-floating-element"
        >
            {isVisible && (
                <motion.button
                    whileHover={jumpAnimation}
                    onClick={scrollToTop}
                    aria-label="Back to top"
                >
                    <CiCircleChevUp
                        size={40}
                        strokeWidth={1.5}
                    />
                </motion.button>
            )}
        </motion.div>
    )
}
export default BackToTopButton

