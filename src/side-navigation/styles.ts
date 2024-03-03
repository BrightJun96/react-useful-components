import styled from 'styled-components';

export const UISide = {
  // 컨테이너
  Wrapper: styled.div<{
    width?: number;
    bgcolor?: string;
  }>`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: ${(props) => `${props.width}px` || '200px'};
    background-color: ${(props) => props.bgcolor || '#fafafa'};
    min-height: 100vh;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  `,

  // 아이템
  Item: styled.div<{
    opacity?: number;
    color?: string;
    hoverbgcolor?: string;
  }>`
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    opacity: ${(props) => props.opacity || 1};
    color: ${(props) => props.color || 'black'};

    &:hover {
      background-color: ${(props) => props.hoverbgcolor || 'white'};
    }
  `,

  // 아이콘 및 텍스트
  Content: styled.div<{ height?: number; width?: number }>`
    display: flex;
    align-items: center;
    gap: 10px;
    width: ${(props) => `${props.width}px` || '200px'};
    height: ${(props) => `${props.height}px` || '50px'};
  `,

  // 아이콘
  Icon: styled.span<{ textsize?: number }>`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${(props) => `${props.textsize}px`};
  `,

  // 텍스트
  Text: styled.p<{ textweight?: number; textsize?: number }>`
    font-size: ${(props) => `${props.textsize}px` || '15px'};
    letter-spacing: 2px;
    font-weight: ${(props) => props.textweight || 500};
  `,

  // DEPTH2 CONTAINER
  Depth2Container: styled.div<{
    open?: boolean;
  }>`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    /* transition: height 0.5s ease; 
        height: ${(props) => (props.open ? 'auto' : 0)}; */
  `,

  // TOTAL BTN
  TotalBtn: styled.button`
    background-color: white;
    height: 40px;
    font-weight: bold;
    box-shadow:
      rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    margin: 10px;
  `,
};
