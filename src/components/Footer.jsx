export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <div>
      <footer className="footer">
        {isOpen ? (
          <div className="order">
            <p>
              We are open until {closeHour}:00. Come visit us or order online
            </p>
            <button className="btn">Order Now</button>
          </div>
        ) : (
          <p>
            We are here to serve you between {openHour}:00 and {closeHour}:00 :)
          </p>
        )}
      </footer>
    </div>
  );
}
