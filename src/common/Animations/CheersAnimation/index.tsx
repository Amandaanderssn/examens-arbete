import React, { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';

import champagneIcon from '../../Icons/cheersIcon.json';


const CheersAnimation = (): React.JSX.Element => {
    const playerRef = useRef<Player>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [hasPlayed, setHasPlayed] = React.useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasPlayed) {
                    playerRef.current?.playFromBeginning();
                    setHasPlayed(true); // Spela bara en gång
                }
            },
            {
                threshold: 0.5 // när 50% av komponenten syns
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(containerRef.current);
            }
        };
    }, [hasPlayed]);

    return (
        <div ref={containerRef}>
            <Player
                ref={playerRef}
                icon={champagneIcon}
                size={250}
            />
        </div>
    );
}

export default CheersAnimation