import { ReactElement } from "react";

interface HeroCardProps {
    children: ReactElement;
}

const HeroCard = ({ children }: HeroCardProps) => {
    return (
        <main className="herobg ">
            {children}
        </main>
    );
};

export default HeroCard;
