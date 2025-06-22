
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer
      className="text-light py-5 mt-auto"
      style={{
        background: "linear-gradient(135deg, #3f51b5, #00bcd4)",
        color: "#f1f1f1",
      }}
    >
      <div className="container">
        <div className="row text-center text-md-start align-items-start">

          {/* Branding */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-white"> TaskManagerPro</h5>
            <p className="small">Organize. Prioritize. Succeed.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
              <li><a href="/terms" className="footer-link">Terms of Service</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold">Follow Us</h6>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-icon">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-icon">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-icon">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-icon">
                <i className="fab fa-github fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold">Newsletter</h6>
            <form>
              <div className="mb-2">
                <input
                  type="email"
                  className="form-control form-control-sm border-0"
                  placeholder="Enter your email"
                  style={{ borderRadius: "8px" }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-outline-light btn-sm w-100"
                style={{ borderRadius: "20px" }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-light" />

        {/* Footer Bottom */}
        <div className="text-center mt-3">
          <p className="mb-1 small">&copy; {new Date().getFullYear()} TaskManagerPro. All rights reserved.</p>
          <p className="small">
            Made  <span className="text-danger"></span> by <strong>Amar Nath</strong>
          </p>
        </div>
      </div>

      {/* Custom Styling */}
      <style>
        {`
          .footer-link {
            color: #f1f1f1;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .footer-link:hover {
            color: #fff;
            text-decoration: underline;
          }

          .footer-icon {
            color: #f1f1f1;
            transition: transform 0.3s ease, color 0.3s ease;
          }

          .footer-icon:hover {
            color: #ffffff;
            transform: scale(1.1);
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
