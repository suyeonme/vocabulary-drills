import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <section>
      <Header />
      <div className="p-5">
        <h1 className="text-sm font-bold">
          Please select the desired sentence length
        </h1>
      </div>
    </section>
  );
};

export default Home;
