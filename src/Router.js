import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home/Home'; 
import AboutMelanoma from './pages/AboutMelanoma/AboutMelanoma'; 
import Detection from './pages/Detection/Detection'; 
import Resources from './pages/Resources/Resources'; 
import YourVoice from './pages/YourVoice/YourVoice'; 
import Error404 from './components/UI/Error404';

// Router function to define which component to render according to link path
// lowercase letter + hyphens for link name is common convention 
const Router = () => 
{
    return (
        <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about-melanoma' element={<AboutMelanoma />}/>
                <Route path='/detection' element={<Detection />}/>
                <Route path='/resources' element={<Resources />}/>
                <Route path='/your-voice' element={<YourVoice />}/>
                {/* for any other path, it will result in error404  */}
                <Route path='*' element={<Error404 />}/>
        </Routes>
    );
}

export default Router; 