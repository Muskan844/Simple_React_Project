const Section = () => {
  return (
    <main className="Shoe container">
      <div className="ShoeContent">
        <h1>YOUR FEET DESERVES THE BEST!</h1>
        <p>
          YOUR FEET DESERVE THE BEST and WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="shoe-button">
          <button>Shop Now</button>
          <button className="
          secbtn">Category</button>
        </div>
        <div className="shopping">
          <p>Also available on</p>
          <div className="brand-icons">
            <img src=".\images\amazon.png" alt=""></img>
            <img src=".\images\flipkart.png" alt=""></img>
          </div>
        </div>
      </div>
      <div className="ShoeImage">
        <img src=".\images\shoe_image.png" alt="shoe" />
      </div>
    </main>
  );
};
export default Section;
