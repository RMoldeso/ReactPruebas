import gitLogo from "../../assets/git.png";

const Logo = () => {
    return (
        <div>
            <a href="https://github.com/RMoldeso/ReactPruebas" target="_blank">
                <img src={gitLogo} className="logo" alt="Vite logo"/>
            </a>
        </div>
    );
};

export default Logo;