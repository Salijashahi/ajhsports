const AchievementsCard = ({ achievements }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="font-semibold mb-3">Achievements</h3>

      {achievements && achievements.length > 0 ? (
        achievements.map((a, i) => (
          <p key={i} className="text-gray-700">
            • {a}
          </p>
        ))
      ) : (
        <p className="text-gray-500">No achievements yet.</p>
      )}
    </div>
  );
};

export default AchievementsCard;
