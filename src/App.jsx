/* eslint-disable no-unused-vars */
//import './App.css'
import React from "react"
import styled from "styled-components"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import { MainLayout } from "./styles/Layout"
import HomePage from "./components/HomePage"
import FinancialRecordProvider from "./components/FinancialRecordProvider"

const AppStyled = styled.div `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f4f4f4;
      main {
      flex: 1;
      background: rgba(252, 246, 249, 0.78);
      border: 3px solid #FFFFFF;
      backdrop-filter: blur(4.5px);
      border-radius: 32px;
      overflow-x: hidden;
      &::-webkit-scrollbar {
        width: 0;
      }
    }
    h1 {
      margin-bottom: 2rem;
      font-size: 2.5rem;
      color: #333;
    }
    .btn {
      background-color: var(--color-accent);
      border: none;
      color: #fff;
      padding: 1rem 2rem;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
      margin: 1rem;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: var(--color-green);
      }

      a {
        text-decoration: none;
        color: inherit;
      }
    }
  
`

function App() {
  return (
    <AppStyled>
      <MainLayout>
        <main>
          <Router>
            <Routes>
              <Route path="/" element={<FinancialRecordProvider/>} />
            </Routes>

          </Router>

        </main>
      </MainLayout>
      
    </AppStyled>
  )
}

export default App
