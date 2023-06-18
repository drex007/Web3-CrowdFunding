import React, { useEffect, useContext } from "react"

import { CrowdFundingContext } from "../Context/CrowdFunding"
import { Hero, Card } from './components'
import PopModal from "./components/PopModal";

const index = () => {

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