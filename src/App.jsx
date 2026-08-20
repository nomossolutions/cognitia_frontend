import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles/header.css';
import './App.css';
import { HomePage } from './pages/homePage';
import { SpanishExercise } from './pages/spanishExercises';
import { ErrorPage } from './pages/errorPage';
import { NavigateApp } from './components/NavigateApp';
import { ProgrammingExercise } from './pages/programmingExercise';
import { MathExercise } from './pages/mathExercise';
import { Nosotros } from './pages/nosotros';
import { Contact } from './pages/contact';
import { FooterComponent } from './components/FooterComponent';
import { ScrollToTop } from './components/ScrollToTop';
import { PhysicExercise } from './pages/physicExercise';
import { ItalianExercise } from './pages/italianExercise';
import { ChemistryExercise } from './pages/chemistryExercise';
import { BiologyExercise } from './pages/biologyExercise';
import { HistoryExercise } from './pages/historyExercise';
import { GeographyExercise } from './pages/geographyExercise';
import { PhilosophyExercise } from './pages/philosophyExercise';
import { EnglishExercise } from './pages/englishExercise';
import { PortugueseExercise } from './pages/portugueseExercise';
import { FrenchExercise } from './pages/frenchExercise';

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavigateApp/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/spanishexercise' element={<SpanishExercise/>}/>
        <Route path='/italianexercise' element={<ItalianExercise/>}/>
        <Route path='/programmingexercise' element={<ProgrammingExercise/>}/>
        <Route path='/mathexercise' element={<MathExercise/>}/>
        <Route path='/physicexercise' element={<PhysicExercise/>}/>
        <Route path='/chemistryexercise' element={<ChemistryExercise/>}/>
        <Route path='/biologyexercise' element={<BiologyExercise/>}/>
        <Route path='/historyexercise' element={<HistoryExercise/>}/>
        <Route path='/geographyexercise' element={<GeographyExercise/>}/>
        <Route path='/philosophyexercise' element={<PhilosophyExercise/>}/>
        <Route path='/englishexercise' element={<EnglishExercise/>}/>
        <Route path='/portugueseexercise' element={<PortugueseExercise/>}/>
        <Route path='/frenchexercise' element={<FrenchExercise/>}/>
        <Route path='/contacto' element={<Contact/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
  )
}

export default App
