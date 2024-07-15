import { useEffect, useState } from "react";
import { RES_MENU_LINK } from "./Links";

function useResMenu(resId) {

    const [resInfo, setResInfo] = useState([]);

    async function fetchedData() {
        let fetchedData = await fetch(RES_MENU_LINK + resId);
        let resData = await fetchedData.json();
        let data = resData?.data?.cards;
        setResInfo(data);
        // console.log(data);
    }

    useEffect(() => {
        fetchedData();
    },[])
    
    
    
    return resInfo;
}


export default useResMenu;