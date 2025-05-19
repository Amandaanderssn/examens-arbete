import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SlideUpOnScrollProps {
    children: React.ReactNode;
};

const SlideUpOnScroll = (props: SlideUpOnScrollProps): React.JSX.Element => {
    const { children } = props
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" }); // triggas när 100px innan elementet

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

export default SlideUpOnScroll;
