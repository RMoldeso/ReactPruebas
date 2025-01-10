import OpenLink from "../Components/Core/OpenLink.jsx";
import Body from '../Components/Home/body.jsx';
import Footer from '../Components/Home/Footer.jsx';

import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import githubLogo from "../assets/git.png";

const Home = () => {
  return (
      <div>
          <div>
              <OpenLink
                  redirectURL="https://vite.dev"
                  logoImage={viteLogo}
              />
              <OpenLink
                  redirectURL="https://react.dev"
                  logoImage={reactLogo}
              />
              <OpenLink
                  redirectURL="https://github.com/RMoldeso/ReactPruebas"
                  logoImage={githubLogo}
              />
          </div>
          <Body />
          <Footer />
      </div>
  );
};

export default Home;