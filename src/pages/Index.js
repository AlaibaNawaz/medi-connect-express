
// Update home page

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to MediConnect Express</h1>
        <p className="text-xl text-gray-600">Connecting Patients with Healthcare Providers</p>
        <div className="mt-8">
          <a href="/login" className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
