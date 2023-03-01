import { Link } from "react-router-dom";

const Welcome = () => {
  const date = new Date();
  const today = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);

  const content = (
    <section className="text-center m-6">
      <p className="text-xl font-semibold py-6">{today}</p>

      <h1 className="text-2xl font-bold py-6">Welcome!</h1>

      <p className="text-xl text-[#4e8a84] font-semibold py-3">
        <Link to="/dash/notes"> View techNotes</Link>
      </p>

      <p className="text-xl text-[yellow] font-semibold py-3">
        <Link to="/dash/users">View User Settings</Link>
      </p>
    </section>
  );

  return content;
};
export default Welcome;
