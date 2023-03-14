import React from 'react';

const Widget:React.FC<{title: string; component: React.FC; width?: string; }> = ({
    title,
    width,
    component: C,
}):JSX.Element => {

    return (
        <div className={` bg-white items-center ${width}`}>
            <div className="font-semibold px-5 py-3 border-b">
               {title}
            </div>
            <div>
                <C />
            </div>
        </div>
    )
}
export default Widget;