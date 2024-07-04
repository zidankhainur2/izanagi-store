export default function AuthLayout({ children }) {
  return (
    <div className="flex items-center justify-center p-4 bg-gray-100 text-gray-800">
      {children}
    </div>
  );
}
