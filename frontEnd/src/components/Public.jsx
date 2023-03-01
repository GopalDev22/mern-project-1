import { Link } from "react-router-dom";

import React from "react";

const Public = () => {
  const content = (
    <section className="text-center m-6">
      <header>
        <h1 className="text-xl font-bold m-3">
          Welcome to <span className="text-blue">Dan D. Repairs!</span>
        </h1>
      </header>
      <main className="m-6 h-[350px]">
        <p className="text-sm m-3">
          Located in Beautiful Downtown Foo City, Dan D. Repairs provides a
          trained staff ready to meet your tech repair needs.
        </p>
        <address className="text-lg">
          Dan D. Repairs
          <br />
          555 Foo Drive
          <br />
          Foo City, CA 12345
          <br />
          <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
        <br />
        <p className="text-lg">Owner: Dan Davidson</p>
      </main>
      <footer className="flex justify-around text-xl font-semibold border-t-2 p-3">
        <Link to="/login" className="text-[green]">
          Employee Login
        </Link>
        <Link to="/dash" className="text-[#659ed0]">
          Dashboard
        </Link>
      </footer>
    </section>
  );
  return content;
};

export default Public;
