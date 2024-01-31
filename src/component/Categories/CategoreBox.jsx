import { useNavigate, useSearchParams } from "react-router-dom";
import qs from 'query-string'

// eslint-disable-next-line react/prop-types
const CategoreBox = ({label , icon:Icon ,selected }) => {
    const [params, setParams]= useSearchParams()
    const navigate = useNavigate()

    const handleClick = () => {
        
        let currantQuery = {}
        if (params) {
            currantQuery= qs.parse(params.toString())
            const updateQuery = {...currantQuery, category : label}

            const url = qs.stringifyUrl({
                url: '/',
                query: updateQuery,
            })

            navigate(url)
        }
    }

    params.get('category')





    return (
        <div onClick={handleClick} className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800
        transition cursor-pointer ${selected ? "border-b-neutral-800  text-neutral-800": ""} `}>
            <Icon size={26} />
            <div className="text-sm font-medium">
            {label}
            </div>
        </div>
    );
};

export default CategoreBox;