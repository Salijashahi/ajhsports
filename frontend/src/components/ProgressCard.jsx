const ProgressCard = ({ progress, target }) => {
  const percent = (progress / target) * 100;

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="font-semibold mb-2">Monthly Goal Progress</h3>
      <p className="text-gray-600">
        {progress} of {target} hours this month
      </p>

      <div className="w-full bg-gray-200 h-3 rounded-full mt-3">
        <div
          className="bg-yellow-400 h-3 rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressCard;
