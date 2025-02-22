import React from "react";

const MemberCard = ({member}) => {
  return (
    <div className="bg-gray-800 p-2 rounded-lg shadow-md">
      <img
        src={`https://jkt48.com${member.ava_member}`}
        alt={member.nama_member}
        className="w-24 h-24 mx-auto rounded-full object-cover"
      />
      <h3 className="text-md font-bold text-center mt-2">
        {member.nama_member}
      </h3>
      <p className="text-sm text-gray-400 text-center">{member.kategori}</p>
    </div>
  );
};

export default MemberCard;
