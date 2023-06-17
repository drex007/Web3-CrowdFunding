import React, { useEffect, useContext } from "react"

import { CrowdFundingContext } from "../Context/CrowdFunding"
import { Hero, Card } from './components'
import PopModal from "./components/PopModal";

const index = () => {
    const {
        titleData,
        getCampaigns,
        createCampaign,
        donate,
        getUserCampaigns,
        getDonations
    } = useContext(CrowdFundingContext);

    const [allCampaigns, setAllCampaigns] = useState()
    const [usercampaign, setUsercampaign] = useState()

    useEffect(() => {
        const getCampaignData = getCampaigns();
        const userCampaignData = getUserCampaigns();
        return async () => {
            const allData = await getCampaignData;
            const userData = userCampaignData;
            setAllCampaigns(allData);
            setUsercampaign(userData);
        }


    }, [])


    //POP UP Modal

    const [openModel, setOpenModel] = useState(false)
    const [donateCampaign, setDonateCampaign] = useState()

    console.log(donateCampaign);

    return (<>

        <Hero titleData={titleData} createCampaign={createCampaign} />
        <Card
            title="All listed Campaign"
            allCampaign={allCampaigns}
            setOpenModel={setOpenModel}
            setDonate={setDonateCampaign}

        />
        <Card
            title="Your Created Campaign"
            allCampaign={userCampaignData}
            setOpenModel={setOpenModel}
            setDonate={setDonateCampaign}

        />

        {openModel && (<PopModal
            setOpenModel={setOpenModel}
            getDonations={getDonations}
            donate={donateCampaign}
            donateFunction={donate}


        />)}

    </>)
}



export default index;