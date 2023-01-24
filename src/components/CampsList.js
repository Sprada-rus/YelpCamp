import {useMemo} from "react";
import {useSelector} from "react-redux";
import CampCard from "./CampCard";

export default function CampsList() {
    const selectCamps = useSelector((state) => state.campsList.changedList)
    const campsList = useMemo(() => selectCamps, [selectCamps]);

    return <div className="container camps-list">
        {campsList.map((camp, index) => <CampCard key={index + '' + camp.camp_id} campData={{...camp}}/>)}
    </div>
}