import styled from 'styled-components';

 const UITABLE = {
     Container: styled.div<{ height?: string; }>`
    width: 100%;
    height: ${({height}) => height||"30vh" };
    display: flex;
    justify-content: center;
    align-items: center;
    `,
     Table: styled.table<{
         border?: string;
         cellpadding?: string;
     }>`
     border: ${({ border, theme }) => border || `1px solid #BABABA`};
    & td,
    & th {
      padding: ${({cellpadding}) => cellpadding|| "10px 20px"} ;
      border: ${({ border, theme }) => border || `1px solid #BABABA`};
    }

     `,
     THead: styled.thead<{bgcolor?:string;}>`
        background-color: ${({ bgcolor, theme }) => bgcolor || "#F6F6F6" };
    `,
     TData: styled.td`

     
     `,
     THeadCell: styled.th<{
         border?: string;
         cellpadding?: string;
     }>`
      padding: ${({cellpadding}) => cellpadding|| "10px 20px"} ;
      border: ${({ border, theme }) => border || `1px solid #BABABA`};
     font-weight: bold;
     `,
     TRowCell: styled.td<{
         border?: string;
         cellpadding?: string;
     }>`
           padding: ${({cellpadding}) => cellpadding|| "10px 20px"} ;
      border: ${({ border, theme }) => border || `1px solid #BABABA`};
     `
 }

 export default UITABLE