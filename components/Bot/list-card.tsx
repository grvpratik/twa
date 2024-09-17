import React from 'react';

const ListCard = () => {
    return (
        <div className="bg-black text-white p-4">
            <h1 className="text-3xl font-bold mb-4">Earn <span className="text-gray-400">69</span></h1>

            <h2 className="text-xl font-semibold mb-3">Weekly</h2>

            <div className="bg-gray-800 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                    <p className="font-medium">Earn for checking socials</p>
                    <span className="text-gray-400">+0/540 BP</span>
                </div>
                <div className="flex justify-between items-center">
                    <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium">Open</button>
                    <span className="text-gray-400 text-sm">0/6</span>
                </div>
            </div>

            <h2 className="text-xl font-semibold mb-2">Promo</h2>
            <p className="text-gray-400 text-sm mb-4">Complete time-limited tasks from carefully selected list of projects to earn extra Blum Points.</p>

            <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-white mr-3 flex items-center justify-center rounded">
                            <span className="text-black text-2xl font-bold">ß</span>
                        </div>
                        <div>
                            <p className="font-medium">The Open League Quest</p>
                            <p className="text-sm text-gray-400">0/3 tasks, +1,000 BP</p>
                        </div>
                    </div>
                    <button className="bg-gray-700 text-white px-4 py-1 rounded-full text-sm font-medium">Open</button>
                </div>
            </div>
        </div>
    );
};

export default ListCard;