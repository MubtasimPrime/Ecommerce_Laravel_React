const Cards = ({ item }) => {
  const { title, price, image } = item;
  return (
    <section className="w-76">
      <figure>
        <img
          src={image}
          alt="image"
          className="w-full h-86 object-cover bg-no-repeat rounded-md"
        />
      </figure>

      <div className="leading-6 mt-2">
        <h2 className="card-title">{title}</h2>
        <p>{price}</p>
      </div>
    </section>
  );
};

export default Cards;
