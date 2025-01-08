import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart, index }) => {
  const handleClick = (e) => {
    const button = e.currentTarget;
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 300);
  };

  return (
    <div className="product-card">
      <div data-aos="zoom-in" data-aos-delay={index * 100}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
          loading="lazy"
        />
        <div className="card-info">
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <button
            className="add-to-cart"
            onClick={(e) => {
              handleClick(e);
              onAddToCart(product);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
