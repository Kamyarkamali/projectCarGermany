import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useChangeName } from "../hooks/useNamePage";

//component
import LogoCars from "../components/LogoCars";
import Articles1 from "../components/Articles1";
import CoNsultationRequest from "../components/CoNsultationRequest";
import Buttonup from "../element/Buttonup";
import CallButton from "../element/CallButton";
import Articles2 from "../components/Articles2";
import Articles3 from "../components/Articles3";
import NewArticelse from "../module/NewArticelse";
import SlidercarsLabale from "../module/SlidercarsLabale";
import NewsComponent from "../module/NewsComponent";

function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    useChangeName("تعمیرگاه تخصصی ماشین های آلمانی");
  }, []);

  return (
    <>
      <div data-aos="fade-up">
        <LogoCars />
        <Articles1 />
        <CoNsultationRequest />
        <Articles2 />
        <Articles3 />
        <NewArticelse />
        <SlidercarsLabale />
        <NewsComponent />
      </div>
      <div className="fixed bottom-3 left-4 z-50">
        <Buttonup />
      </div>
      <div className="fixed bottom-3 right-4 z-50">
        <CallButton />
      </div>
    </>
  );
}

export default HomePage;
