import CustomLink from "../components/CustomLink";
import CodeBlock from "../components/blocks/CodeBlock";

const Home = () => (
    <div className="bg-gray-200 flex flex-1 items-center dark:text-white dark:bg-dmLighterBlack">
        <div className="flex-1">
            <div className="text-center">
                <p>
                    Edit
                    <CodeBlock label=" src/App.tsx " />
                    and save to reload.
                </p>
                <CustomLink to="https://reactjs.org" rel="noopener noreferrer" target="_blank" />
            </div>
        </div>
    </div>
);

export default Home;
