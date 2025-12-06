const ProfileHeader = ({ user }) => {
  const initials = user.name
    ? user.name.split(" ").map(i => i[0]).join("")
    : "U";

  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="bg-gray-200 w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-semibold">
          {initials}
        </div>

        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-500">{user.bio}</p>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">
          Settings
        </button>
        <button className="px-4 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-500">
          Connect
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
