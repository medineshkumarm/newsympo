const Footer = () => {
  return (
    <footer className="relative z-10 bg-black text-white py-5 dark:bg-dark">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="mt-4">
            <h4 className="text-xl font-bold mb-3">
              Panimalar Engineering College
            </h4>
            <p className="text-sm text-gray-400">
              Bangalore Trunk Road, Varadharajapuram, Poonamallee, Chennai – 600
              123
            </p>
            <p className="flex items-center mt-3 text-sm text-gray-300">
              <span className="mr-2">📞</span> +044 -26490404 / 0505 / 0717
            </p>
          </div>

          {/* HOD Section */}
          <div>
            <div className="">
              <LinkGroup header="Head of the Department - CSE">
                <NavLink label="Dr. L. JABASHEELA" />
              </LinkGroup>
            </div>
            {/* Faculty Coordinators */}
            <div className="">
              <LinkGroup header="Faculty Coordinators">
                <NavLink label="Mrs.S.T.SANTHANALAKSHMI - 8939275959" />
              </LinkGroup>

              {/* Student Committee */}
              <LinkGroup header="Student Committee">
                <NavLink label="RAGAUV T - 6383434707" />
                <NavLink label="SINDHUJA R - 7810013806" />
              </LinkGroup>
            </div>
          </div>
          {/* Social Media Section */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Follow Us On</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/xerone_2k25?igsh=b3h0Zm53ZXZ6bzQ4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/instagram.png"
                  alt="Instagram"
                  width="30"
                  height="30"
                  className="hover:opacity-75"
                />
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-4">© 2025 PEC</p>
          </div>

          {/* Map Section (Now Part of Footer Grid) */}
          <div>
            <h4 className="text-lg font-semibold mb-3 p-2">Locate Us</h4>
            <div className="w-full h-40 sm:h-48 lg:h-56 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.792044920742!2d80.0754642!3d13.0489049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261c68a9f3031%3A0xab41c8bdcf32ad47!2sPanimalar%20Engineering%20College!5e0!3m2!1sen!2sin!4v1739266028025!5m2!1sen!2sin"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const LinkGroup: React.FC<{ children: React.ReactNode; header: string }> = ({
  children,
  header,
}) => {
  return (
    <div>
      <h4 className="text-lg font-semibold my-3">{header}</h4>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
};

const NavLink: React.FC<{ label: string }> = ({ label }) => {
  return <li className="text-sm text-gray-300">{label}</li>;
};
