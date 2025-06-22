
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="bg-white text-dark py-5 mt-auto border-top">
      <div className="container">
        <div className="row text-center text-md-start align-items-start">

          {/* Branding */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-primary">TaskManagerPro</h5>
            <p className="text-secondary small">Organize. Prioritize. Succeed.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/privacy" className="text-secondary text-decoration-none">Privacy Policy</a></li>
              <li><a href="/terms" className="text-secondary text-decoration-none">Terms of Service</a></li>
              <li><a href="/contact" className="text-secondary text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Follow Us</h6>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-secondary">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-secondary">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-secondary">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-secondary">
                <i className="fab fa-github fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Newsletter</h6>
            <form>
              <div className="mb-2">
                <input
                  type="email"
                  className="form-control form-control-sm"
                  placeholder="Your email"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-sm w-100">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr />

        {/* Footer Bottom */}
        <div className="row">
          <div className="col text-center">
            <p className="mb-1 text-secondary small">
              &copy; {new Date().getFullYear()} TaskManagerPro. All rights reserved.
            </p>
            <p className="text-secondary small">
              Made  by <strong className="text-dark">Amar Nath</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
