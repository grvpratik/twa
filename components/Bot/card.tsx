import React from 'react';

const QuestCard = ({ points, title, Icon }:any) => {
    return (
        <div className="rounded-lg p-4 bg-accent shadow-md transition-transform transform hover:shadow">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="w-10 h-10 bg-white mr-3 flex items-center justify-center rounded-full shadow-lg">
                        <Icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                        <p className="font-semibold text-lg">{title}</p>
                        <p className="text-sm text-gray-400">{`+${points} BP`}</p>
                    </div>
                </div>
                <button className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-gray-600">
                    Open
                </button>
            </div>
        </div>
    );
};

export default QuestCard;
