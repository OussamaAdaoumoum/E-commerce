import Layout from "../../components/Layout/Layout";
import VintageFashion from "../../components/words/Vintage_Fashion/Vintage_Fashion.component";
import VintageDefinition from "../../components/words/Vintage_Definition/Vintage_Definition.component";
import OneWord from "../../components/words/OneWord/OneWord";
import Categories from '../../components/Category-Card/Categories.component'
// import InfinitSlider from '../../components/Infinit_Slider/Infinit_Slider.component'

function Home(){
    return(

        <Layout>
            <div className=" flex flex-wrap content-around ">
                <VintageFashion />
                <VintageDefinition />
                <OneWord Word="MADE BY LOVE"/>
                <Categories />
                {/* <InfinitSlider /> */}

            </div>
        </Layout>
    );
}

export default Home;