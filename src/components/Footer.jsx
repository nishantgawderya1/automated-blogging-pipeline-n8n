import { Link } from 'react-router-dom';

const footerLinks = [
  ['Fashion', 'Beauty', 'Watches & Jewellery', 'Culture', 'Living'],
  ['About Grazia', 'Advertise', 'Contact', 'Careers'],
  ['Privacy Policy', 'Cookie Policy', 'Terms & Conditions'],
];

export default function Footer() {
  return (
    <footer className="border-t border-[#e0e0e0] bg-white mt-auto" id="site-footer">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-editorial text-2xl font-bold tracking-[0.08em] text-[#111111]">
              GRAZIA
            </Link>
            <p className="font-editorial italic text-[#888888] text-sm mt-3 leading-relaxed">
              The definitive voice in fashion, beauty, and luxury jewellery.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group, i) => (
            <div key={i} className="flex flex-col gap-2.5">
              {group.map((label) => (
                <Link
                  key={label}
                  to="/"
                  className="font-sans-ui text-[10px] uppercase tracking-[0.1em] text-[#888888] hover:text-[#111111] transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="h-px bg-[#e8e8e8] mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="font-sans-ui text-[9px] uppercase tracking-[0.1em] text-[#bbbbbb]">
            © {new Date().getFullYear()} Grazia. All rights reserved.
          </p>
          <p className="font-sans-ui text-[9px] uppercase tracking-[0.1em] text-[#bbbbbb]">
            Powered by Flaunt Basket
          </p>
        </div>
      </div>
    </footer>
  );
}
