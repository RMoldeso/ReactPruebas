// eslint-disable-next-line react/prop-types
const OpenLink = ({ redirectURL, logoImage }) => {
    return (
        <div>
            <a href={redirectURL} target="_blank">
                <img src={logoImage} className="logo" alt="Vite logo"/>
            </a>
        </div>
    );
};

export default OpenLink;