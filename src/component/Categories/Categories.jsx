import { useSearchParams } from "react-router-dom";
import Container from "../Shared/Container/container";
import CategoreBox from "./CategoreBox";
import { categories } from "./CategoreData";




const Categories = () => {
    const [params, setParams] = useSearchParams()
    const category = params.get('category')
    return (
        <Container>
            <div className="pt-4 flex items-center justify-between overflow-x-auto ">
                {categories.map(items => <CategoreBox key={items.label}
                    label={items.label}
                    icon={items.icon} selected={category === items.label} categorie={items}>



                </CategoreBox>)}
            </div>
        </Container>
    );
};
export default Categories;