/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
//-------------------------------dependency
import bg from '../img/bg.png'
import {MainLayout}  from '../styles/Layout'
import Navigation from './Navigation'

const FinancialRecordStyled = styled.div`
        height: 100vh;
        background-image: url(${bg});
        position:relative;
        main{
            flex: 1;
            background: rgba(252, 246, 249, 0.78);
            border: 3px solid #FFFFFF;
            backdrop-filter: blur(4.5px);
            border-radius: 32px;
            overflow-x: hidden;
            &::-webkit-scrollbar{
                width: 0;
            }
            }
`;




const FinancialRecordProvider = () => {
  return (
    <FinancialRecordStyled>
        <MainLayout>
          <Navigation/>
          <main>

          </main>     
        </MainLayout>
    </FinancialRecordStyled>
  )
}

export default FinancialRecordProvider