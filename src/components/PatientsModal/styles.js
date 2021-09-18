import styled from "styled-components";

export const Container = styled.div`
  img {
    position: absolute;
    top: -17%;
    right: 10px;

    left: 50%;
    transform: translateX(-50%);

    border-radius: 50%;
  }
  .react-modal-close {
    position: absolute;
    right: -0.05rem;
    top: 0;
    border: 0;
    background: transparent;
  }

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin: 1.5rem 0;
  }
  p {
    margin-bottom: 0.75rem;
    span {
      font-size: 1rem;
      font-weight: 600;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
