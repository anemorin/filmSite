import React from "react"
import styled from "styled-components"

const Layout = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: ${(props) => props.gap ? `${props.gap}px` : '0px'};
`;

type LayoutProps = {
  gap?: string;
}

type Props = {
  children?: React.ReactElement[] | React.ReactElement;
  gap?: string;
}

const PageLayout : React.FC<Props> = ({children, gap}) => {
  return (
    <Layout
      gap={gap}
    >
      {children}
    </Layout>
  )
}

export default PageLayout;