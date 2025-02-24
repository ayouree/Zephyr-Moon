import React from "react";

const ScheduleList = ({schedule}) => {
  if (!Array.isArray(schedule) || schedule.length === 0) {
    return <p>No schedule found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {schedule.map((item, i) => (
        <div key={i} className="bg-gray-800 p-4 rounded-2xl shadow-md">
          <h3 className="text-lg font-bold">{item.setlist}</h3>
          <p className="text-sm text-gray-400">Date: {item.showInfo.split('Show')[0]}</p>
          <p className="text-sm text-gray-400">Time: {item.showInfo.split(' ')[2]}</p>
          <p className="text-sm text-gray-400">Members:</p>
          <ul className="list-disc list-inside">
            {item.members.map((member, index) => (
              <li key={index} className="text-gray-300">
                {member}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ScheduleList;
