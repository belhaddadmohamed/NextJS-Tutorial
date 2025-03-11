import React from 'react';


const Loading = () => {

    const skeletonItems = [1, 2, 3, 4, 5, 6]

    return (
        <div className="container mx-auto p-4">
            <ul className="space-y-4 mb-4 bg-gray-600 animate-pulse">
                {skeletonItems.map((item)=>
                    <li className="shadow-md rounded-lg p-6 bg-gray-600 animate-pulse" key={item}>
                        <h2 className="text-2xl font-semibold mb-2 bg-gray-600 animate-pulse"></h2>
                        <p className="text-gray-700 bg-gray-600 animate-pulse"></p>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Loading;