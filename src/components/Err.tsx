import { Link, useRouteError } from 'react-router-dom';

function Err() {
    const error = useRouteError() as { statusText?: string; message?: string };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-600">Oops!</h1>
      <p className="text-xl text-gray-700 mt-2">Something went wrong.</p>
      <p className="text-gray-500 mt-1">{error?.statusText || error?.message}</p>
      <Link
        to="/"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default Err