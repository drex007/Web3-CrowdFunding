import { useState, useContext, useEffect } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Body from './components/Body'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
// import './App.css'

import { CrowdFundingContext } from '../Context/CrowdFunding'
import Card from './components/Card'
import { PopModal } from './components'

function App() {
  const {
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaign,
    getDonations
  } = useContext(CrowdFundingContext);

  const [allCampaigns, setAllCampaigns] = useState()
  const [usercampaign, setUsercampaign] = useState()

  useEffect(() => {
    const getCampaignData = getCampaigns();
    const userCampaignData = getUserCampaign();
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



  return (
    <>
      <ToastContainer />
      <NavBar />
      <Hero titleData={titleData} createCampaign={createCampaign} />
      <Card
        title="All listed Campaign"
        // allcampaigns={allCampaigns}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}

      />
      {openModel && (<PopModal
        setOpenModel={setOpenModel}
        getDonations={getDonations}
        donate={donateCampaign}
        donateFunction={donate}


      />)}

      <Footer />
    </>
  )
}

export default App
