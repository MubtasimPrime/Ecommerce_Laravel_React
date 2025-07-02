import React from "react";
import Cards from "./common/Cards";

const NewArrivals = ({ newArrivals }) => {
  //   console.log(newArrivals);

  return (
    <section className="py-5 max-w-11/12 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">New Arrivals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {newArrivals.map((item) => (
          <Cards key={item.id} item={item}></Cards>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
