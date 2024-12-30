const Footer = () => {
  return (
    <footer className="w-full py-6 mt-4 border-t">
      <div className="container mx-auto px-4">
        <div className="flex  justify-between  ">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-medium">Music Room.</h2>
            <p className="text-sm text-muted-foreground">
              Book your Music Room
            </p>
          </div>

          <nav>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a href="/about" className="hover:text-primary">
                  About us
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-primary">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-primary">
                  T&C
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-primary">
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
