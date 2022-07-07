import React from "react";

const FooterSection = () => {
  // current year
  const year = new Date().getFullYear();

  return (
    <section id="footer" className="text-center text-sm p-2">
      &copy; {year | 2022} All rights reserved.
    </section>
  );
};

export default FooterSection;
