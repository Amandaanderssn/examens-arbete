import { Box } from "@mui/material";
import React, { useRef } from "react"

declare global {
    interface Window {
        UnicornStudio: {
            isInitialized: boolean;
            init: () => Promise<void>;
        };
    }
}

const LoginBackgroundAnimation = (): React.JSX.Element => {

    const containerRef = useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const loadScriptAndInit = () => {
            if (!window.UnicornStudio) {
                const script = document.createElement('script');
                script.src =
                    'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.20/dist/unicornStudio.umd.js';
                script.async = true;
                script.onload = () => {
                    if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
                        window.UnicornStudio.init().then(() => {
                            window.UnicornStudio!.isInitialized = true;
                        });
                    }
                };
                document.body.appendChild(script);
            } else {
                // Om init redan körts - resetta div och initiera igen
                if (window.UnicornStudio.isInitialized) {
                    // Rensa animationen manuellt
                    if (containerRef.current) {
                        containerRef.current.innerHTML = '';
                    }
                    window.UnicornStudio.isInitialized = false;
                }
                window.UnicornStudio.init().then(() => {
                    window.UnicornStudio!.isInitialized = true;
                });
            }
        };

        loadScriptAndInit();
    }, []);


    return (
        <Box
            className="unicorn-embed"
            data-us-project="K6pxalKYzrGloNQM5zp2"
            sx={{
                width: '100vw', height: '100vh', zIndex: -1, position: 'fixed',
                top: 0,
                left: 0,
            }}
        ></Box>

    )
}

export default LoginBackgroundAnimation