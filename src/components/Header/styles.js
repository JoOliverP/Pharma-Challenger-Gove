import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue-100);
`;
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 1rem 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 50px;
    height: 50px;
  }
`;
