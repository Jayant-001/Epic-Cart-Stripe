
'use client'
import Lottie from "lottie-react";
import delivery from "@/delivery.json";

const loading = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-[50%] h-[50%] ">
                <Lottie style={{objectFit: 'fill'}} animationData={delivery} height={'100%'} width={"100%"} />
            </div>
        </div>
    );
};

export default loading;
