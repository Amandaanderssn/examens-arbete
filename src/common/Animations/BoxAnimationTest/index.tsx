import { Box, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const ScrollShakeBox = (): React.JSX.Element => {
    const ref = useRef(null);

    // Scrollprogress mellan 0 och 1 över hela sidan
    const { scrollYProgress } = useScroll();

    // Omvandla scrollprogress till rotation: 0 till 720 grader t.ex.
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

    return (
        <motion.div
            ref={ref}
            style={{
                rotate,
                position: "absolute",
                top: "80%",
                left: "80%",
                transform: "translate(-50%, -50%)",
                display: "inline-block",
            }}
        >
            <Box sx={{ borderRadius: '50%', backgroundColor: '#eaafde', height: '7rem', width: '7rem', display: 'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                <Typography>Top tre nedanför</Typography>
            </Box>
        </motion.div>
    );
}

export default ScrollShakeBox
