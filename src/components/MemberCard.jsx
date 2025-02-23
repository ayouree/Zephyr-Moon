import React from "react";

const MemberCard = ({ member }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-2xl shadow-md flex flex-col items-center">
      <img
        src={`https://jkt48.com${member.ava_member}`}
        alt={member.nama_member}
        className="w-24 h-24 rounded-full object-cover mb-2"
      />
      <h3 className="text-md font-bold text-center">{member.nama_member}</h3>
      <p className="text-sm text-gray-400 text-center">{member.kategori}</p>
    </div>
  );
};

export default MemberCard;
