import React from "react";
import { Composition, staticFile } from "remotion";
import { NexDetailPromo } from "./NexDetailPromo";
import "./styles/fonts.css";

const fontStyles = `
  @font-face {
    font-family: 'FK Grotesk';
    src: url('${staticFile("fonts/FKGroteskTrial-Regular.otf")}') format('opentype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'FK Grotesk';
    src: url('${staticFile("fonts/FKGroteskTrial-Medium.otf")}') format('opentype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'FK Grotesk';
    src: url('${staticFile("fonts/FKGroteskTrial-Bold.otf")}') format('opentype');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'FK Grotesk Mono';
    src: url('${staticFile("fonts/FKGroteskMonoTrial-Regular.otf")}') format('opentype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'FK Grotesk Mono';
    src: url('${staticFile("fonts/FKGroteskMonoTrial-Bold.otf")}') format('opentype');
    font-weight: 700;
    font-style: normal;
  }
`;

export const Root: React.FC = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: fontStyles }} />
      <Composition
        id="NexDetailPromo"
        component={NexDetailPromo}
        durationInFrames={1924} // 64.12 seconds @ 30 fps
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
