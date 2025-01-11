import { Link, useNavigate } from "react-router-dom";

const Links = ({ border, background, width }) => {
  const navigate = useNavigate();

  return (
    <Link
      navigate
      to="#"
      style={{
        color: "Green",
        textAlign: "center",
        textDecoration: "underline",
        border: border,
        backgroundColor: background,
        width: width,
      }}
    />
  );
};

export default Links;
