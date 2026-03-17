const Footer = () => {
    return (
        <div className="pt-4 mt-4 border-t-2">
            <footer className="footer sm:footer-horizontal bg-gray-50 text-gray-800 p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Web App Development</a>
                    <a className="link link-hover">Mobile App Development</a>
                    <a className="link link-hover">UI/UX Design</a>
                    <a className="link link-hover">API Integration</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Portfolio</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Resources</h6>
                    <a className="link link-hover">Documentation</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Support</a>
                    <a className="link link-hover">FAQs</a>
                </nav>
            </footer>

            <footer className="footer bg-gray-50 text-gray-600 border-t border-gray-200 px-10 py-6">
                <aside className="items-center">
                    <p className="font-semibold text-lg text-gray-800">
                        Hero.Io
                    </p>
                    <p className="text-sm">
                        Building powerful apps for modern businesses 🚀
                    </p>
                </aside>

                <nav className="md:place-self-center md:justify-self-end">
                    <div className="flex gap-4">
                        <a className="hover:text-primary transition cursor-pointer">Twitter</a>
                        <a className="hover:text-primary transition cursor-pointer">YouTube</a>
                        <a className="hover:text-primary transition cursor-pointer">Linkedin</a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;