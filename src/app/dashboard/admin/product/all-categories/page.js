export default function page() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Total Users</h3>
            <p className="text-3xl font-bold text-blue-500">1,234</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Revenue</h3>
            <p className="text-3xl font-bold text-green-500">$12,345</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Active Sessions</h3>
            <p className="text-3xl font-bold text-purple-500">567</p>
          </div>
        </div>
      </div>
    );
  }