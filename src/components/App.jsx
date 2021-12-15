import "../styles/index.scss";
import sword from "../images/file_example_PNG_500kB.png"
import swordSvg from "../images/410.svg"
const App = () => {
    return (
        <>
        <section className="hero"></section>
        <main>
            <section>
                <h1>Oh Hai, React</h1>
            </section>
            <img src={sword} alt="sword" width="250" />
            <img src={swordSvg} alt="swordSvg" width="250" />
        </main>
        </>
    );
};

export default App