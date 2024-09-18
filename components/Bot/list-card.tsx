import React from 'react';

const ListCard = () => {
    return (
        <div className="bg-black text-white p-4">
            <h1 className="text-3xl font-bold mb-4">Earn <span className="text-gray-400">69</span></h1>

            <h2 className="text-xl font-semibold mb-3">Check In</h2>

            <div className="bg-gray-800 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                    <p className="font-medium">Daily check in reward</p>
                    <span className="text-gray-400">+200 BP</span>
                </div>
                <div className="flex justify-between items-center">
                    <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium">Open</button>
                    <span className="text-gray-400 text-sm">0/6</span>
                </div>
            </div>

            <h2 className="text-xl font-semibold mb-2">Promo</h2>
            <p className="text-gray-400 text-sm mb-4">Complete time-limited tasks from carefully selected list of projects to earn extra Blum Points.</p>

            
        </div>
    );
};

export default ListCard;