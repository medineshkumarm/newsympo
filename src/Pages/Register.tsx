import React, { useEffect } from "react";

const Register: React.FC = () => {
  useEffect(() => {
    // Redirect to the specific link when the component mounts
    window.location.href = "https://forms.gle/GbcXhB3JLxmZHnL36";
  }, []);

  // You can render some content here
  return (
    <div>
      <p>Redirecting to the registration page...</p>
      {/* You can add more content if needed */}
    </div>
  );
};

export default Register;
