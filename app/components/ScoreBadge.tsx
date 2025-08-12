import React from "react";

const ScoreBadge = ({ score }: { score: number }) => {
  let bg = "bg-badge-green";
  let text = "text-green-600";
  let label = "Strong";

  if (score > 49 && score <= 70) {
    bg = "bg-badge-yellow";
    text = "text-yellow-600";
    label = "Good Start";
  } else if (score <= 49) {
    bg = "bg-badge-red";
    text = "text-red-600";
    label = "Needs work";
  }

  return (
    <div className={`score-badge ${bg}`}>
      <p className={`text-xs font-semibold ${text}`}>{label}</p>
    </div>
  );
};

export default ScoreBadge;
