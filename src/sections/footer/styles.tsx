import styled from "styled-components";

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
`;

export const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  transform: translate(-50%, -50%);
  object-fit: cover;
`;

export const ContentOverlay = styled.div`
  position: relative;
  z-index: 1;
  color: var(--color-text-dark);
  padding: 1.5rem;
  background: var(--color-bg-light);
  height: 100%;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;
