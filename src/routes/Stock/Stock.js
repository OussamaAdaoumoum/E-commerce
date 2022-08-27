import Layout from "../../components/Layout/Layout";
import OneWord from "../../components/words/OneWord/OneWord";
import ItemStock from '../../components/Item-Stock/Item-Stock.component'
// import InfinitSlider from '../../components/Infinit_Slider/Infinit_Slider.component'

function Stock(){
    return(

        <Layout>
            <div className=" flex flex-wrap content-around ">
                <OneWord Word="STOCK"/>
                <ItemStock />
            </div>
        </Layout>
    );
}

export default Stock;