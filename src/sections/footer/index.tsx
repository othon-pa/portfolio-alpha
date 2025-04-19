import { ContentOverlay, Overlay, VideoContainer } from "./styles";

export default function FooterSection() {
  return (
    <VideoContainer className="bebas-neue-regular">
      {/* <Video autoPlay muted loop playsInline>
        <source src="/eye_background.mp4" type="video/mp4" />
      </Video> */}
      <Overlay />
      <ContentOverlay>© 2025 Othon Parra. All rights reserved.</ContentOverlay>
    </VideoContainer>
  );
}
