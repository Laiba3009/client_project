// App.jsx
import React from "react";
import ProductDetail from "./components/ProductDetail";
import VideoPlayer from "./components/VideoPlayer";
import StepTutorial from "./components/StepTutorial";
import PromoBanner from "./components/PromoBanner";
import Reviews from "./components/Reviews";
import FAQSection from "./components/FAQ";
import FSlider from "./components/FSlider";
import FeatureHighlights from "./components/FeatureHighlights";
import './index.css';

const App = () => {
  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden">
      <ProductDetail />
      <VideoPlayer />
      <StepTutorial />
      <PromoBanner />
      <Reviews />
      <FAQSection />
      <FSlider />
      <FeatureHighlights />
    </div>
  );
};

export default App;
