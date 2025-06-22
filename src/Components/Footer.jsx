

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Made with ❤️ by Amar Nath 
        </p>
      </div>
    </footer>
  );
}
export default Footer;