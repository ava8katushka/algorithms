import "bulma/css/bulma.min.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import "./global.css";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Providers } from "./providers"
config.autoAddCss = false;
library.add(fas, fab);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
        <Navigation />
        <div className="hero">
          <div className="hero-body">
          
            {children}
     
            </div>
        </div>
        <Footer />
        </Providers>
      </body>
    </html>
  );
}
