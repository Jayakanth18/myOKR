import { logout } from "./logout/action";

export default function Home() {
  return (
    <>
      {/* <form action={logout}>
        <button type="submit">Logout</button>
      </form> */}
      <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">myOKR</h1>
          <p className="text-xl sm:text-2xl mb-6">
            The easiest way to set, track, and achieve your goals with OKRs.
          </p>
          <a
            href="/login"
            className="bg-yellow-500 hover:bg-yellow-400 text-black py-3 px-6 rounded-full text-lg font-semibold transition"
          >
            Start Using myOKR
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="p-6 bg-white shadow-lg rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Goal Setting</h3>
              <p>Set clear and actionable goals for teams and individuals.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Progress Tracking</h3>
              <p>Track your progress towards your goals in real-time.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
              <p>Collaborate and align with your team effectively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Achieve Your Goals?
          </h2>
          <p className="text-lg mb-6">
            Start using myOKR today and take the first step towards achieving success!
          </p>
          <a
            href="/login"
            className="bg-yellow-500 hover:bg-yellow-400 text-black py-3 px-6 rounded-full text-lg font-semibold transition"
          >
            Sign Up Now
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© 2025 myOKR. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  );
}
