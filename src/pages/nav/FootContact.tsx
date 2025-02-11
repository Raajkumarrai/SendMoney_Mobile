const FootContact = () => {
  return (
    <footer className="bg-[#b3ffff] text-black px-4 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <p className="text-sm ">
            Get in touch with our support team for any assistance
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Money Transfer</li>
            <li>Mobile Top-up</li>
            <li>Bill Payments</li>
            <li>Currency Exchange</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Valuable Links</h3>
          <ul className="space-y-2 text-sm ">
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FootContact;
