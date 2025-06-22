const Footer = () => {
  return (
    <footer className="bg-white text-dark py-4 mt-auto border-top">
      <div className="container">
        <div className="row text-center text-md-start align-items-center">
          
          {/* Branding */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="fw-bold text-primary">TaskManagerPro</h5>
            <p className="text-secondary small">Organize. Prioritize. Succeed.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3 mb-md-0">
            <ul className="list-unstyled mb-0">
              <li><a href="/privacy" className="text-secondary text-decoration-none">Privacy Policy</a></li>
              <li><a href="/terms" className="text-secondary text-decoration-none">Terms of Service</a></li>
              <li><a href="/contact" className="text-secondary text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Copyright */}
          <div className="col-md-4 text-md-end">
            <p className="mb-1 text-secondary small">
              &copy; {new Date().getFullYear()} TaskManagerPro. All rights reserved.
            </p>
            <p className="text-secondary small">Made with ❤️ by <strong className="text-dark">Amar Nath</strong></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
