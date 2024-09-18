import React from 'react';

const EventTimeline = ({ events}:any ) => {
  return (
    <ul className="w-1/2 m-4">
      {events.map((event:any, index    :any) => (
        <li key={index} className="flex text-gray-600">
          <time className="relative px-6" dateTime={event.datetime}>
            {event.time}
            <span className="absolute right-0 top-0 z-10 w-2 h-2 bg-white border border-gray-300 rounded-full transform translate-x-1/2"></span>
          </time>
          <span className="relative pl-6 pb-6">
            <span className="absolute left-0 h-full border-l border-gray-300"></span>
            <strong className="block font-bold">{event.title}</strong>
            {event.description}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default EventTimeline;

// import React from 'react';

// const EventTimeline = ({ events }) => {
//     return (
//         <ul className="w-1/2 m-4 font-sans">
//             {events.map((event, index) => (
//                 <li key={index} className="flex text-gray-600 mb-4">
//                     <time className="relative px-6 flex items-center" dateTime={event.datetime}>
//                         {event.time}
//                         <span className="absolute right-0 top-1/2 z-10 w-6 h-6 bg-white border border-gray-300 rounded-full transform translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-xs font-semibold text-gray-600">
//                             {index + 1}
//                         </span>
//                     </time>
//                     <span className="relative pl-6 pb-2">
//                         <span className="absolute left-0 h-full border-l border-gray-300"></span>
//                         <strong className="block font-bold">{event.title}</strong>
//                         {event.description}
//                     </span>
//                 </li>
//             ))}
//         </ul>
//     );
// };

// export default EventTimeline;