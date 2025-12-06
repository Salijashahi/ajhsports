const tabs = [
  "Overview",
  "Personal Info",
  "Stats & Activity",
  "Preferences",
  "Account"
];

const ProfileTabs = () => {
  return (
    <div className="flex gap-4 mt-8 border-b pb-3">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm"
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ProfileTabs;
