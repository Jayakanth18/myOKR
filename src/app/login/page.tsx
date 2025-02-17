import { login, signup } from "./action";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-blue-600 flex items-center justify-center">
      <form className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
          Welcome Back
        </h2>

        {/* Email Input */}
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        {/* Password Input */}
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mt-4"
        >
          Password:
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        {/* Buttons */}
        <div className="mt-6">
          <button
            type="submit"
            formAction={login}
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Log in
          </button>

          <button
            type="submit"
            formAction={signup}
            className="w-full py-3 mt-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

