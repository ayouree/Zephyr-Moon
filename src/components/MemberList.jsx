import React from "react";
import MemberCard from "./MemberCard";

const MemberList = ({members}) => {
  if (!Array.isArray(members) || members.length === 0) {
    return <p>No members found.</p>; // Handle case where members is not an array
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {members.map((member, i) => (
        <MemberCard key={i} member={member} />
      ))}
    </div>
  );
};

export default MemberList;
