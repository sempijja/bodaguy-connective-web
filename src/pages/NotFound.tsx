import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true }); // Redirect to home
  }, [navigate]);

  return null; // Optionally, show a loading spinner here
};

export default NotFound;
