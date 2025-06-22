

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row text-center text-md-start align-items-center">
          
          {/* Branding */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="fw-bold">TaskManagerPro</h5>
            <p className="text-muted small">Organize. Prioritize. Succeed.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3 mb-md-0">
            <ul className="list-unstyled mb-0">
              <li><a href="/privacy" className="text-muted text-decoration-none">Privacy Policy</a></li>
              <li><a href="/terms" className="text-muted text-decoration-none">Terms of Service</a></li>
              <li><a href="/contact" className="text-muted text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Copyright */}
          <div className="col-md-4 text-md-end">
            <p className="mb-1 text-muted small">
              &copy; {new Date().getFullYear()} TaskManagerPro. All rights reserved.
            </p>
            <p className="text-muted small">Made with ❤️ by <strong>Amar Nath</strong></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;