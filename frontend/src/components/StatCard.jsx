const StatCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <p className="text-gray-500">{title}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
