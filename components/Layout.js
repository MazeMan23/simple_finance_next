import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ h, f, children }) {
  const [offset, setOffset] = React.useState("00");

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 255) {
        setOffset("ff");
        return;
      }

      setOffset(Math.round(window.scrollY).toString(16).padStart(2, "0"));
    });

    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 255) {
          setOffset("ff");
          return;
        }

        setOffset(Math.round(window.scrollY).toString(16).padStart(2, "0"));
      });
    };
  }, [setOffset]);

  return (
    <div className="min-w-full min-h-screen ">
      <Header t={h} bg={offset} />
      <div className="flex flex-col min-w-full justify-center">{children}</div>
      <Footer t={f} h={h} />
    </div>
  );
}
