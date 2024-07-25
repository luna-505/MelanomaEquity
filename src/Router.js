import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home/Home'; 
import AboutMelanoma from './pages/AboutMelanoma/AboutMelanoma'; 
import Overview from './pages/AboutMelanoma/subpages/Overview';
import Myths from './pages/AboutMelanoma/subpages/Myths'; 
import Prevention from './pages/AboutMelanoma/subpages/Prevention';
import Statistics from './pages/AboutMelanoma/subpages/Statistics';
import Sunscreen from './pages/AboutMelanoma/subpages/Sunscreen';
import Detection from './pages/Detection/Detection'; 
import YourVoice from './pages/YourVoice/YourVoice'; 
import FeedbackForm from './pages/YourVoice/FeedbackForm';
import ImageSubmissionForm from './pages/YourVoice/ImageSubmissionForm';
import RiskFactors from './pages/AboutMelanoma/subpages/RiskFactors';
import SelfExaminationGuide from './pages/Detection/SelfExaminationGuide';
import DetectModel from './pages/Detection/TeachableMachine';
import Error404 from './components/UI/Error404';

// Router function to define which component to render according to link path
// lowercase letter + hyphens for link name is common convention 
const Router = () => 
{
    return (
        <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about-melanoma' element={<AboutMelanoma />}/>
                <Route path='/about-melanoma/overview' element={<Overview />} />
                <Route path='/about-melanoma/myths' element={<Myths />} />
                <Route path='/about-melanoma/prevention' element={<Prevention />} />
                <Route path='/about-melanoma/statistics' element={<Statistics />} />
                <Route path='/about-melanoma/how-to-wear-sunscreen' element={<Sunscreen />} />
                <Route path='/about-melanoma/risk-factors' element={<RiskFactors />} />


                <Route path='/detection' element={<Detection />}>
                    <Route path='self-examination-guide' element={<SelfExaminationGuide />} /> 
                    <Route path='detect-machine' element={<DetectModel />} /> 
                </Route>
                <Route path='/your-voice' element={<YourVoice />}>
                    <Route path='feedback-form' element={<FeedbackForm/>} />
                    <Route path='image-submission-form' element={<ImageSubmissionForm/>} />
                </Route>
                {/* for any other path, it will result in error404  */}
                <Route path='*' element={<Error404 />}/>
        </Routes>
    );
}

export default Router; 