import React, { useState } from 'react';
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
import { PhysicExercise } from './pages/physicExercise';
import { ItalianExercise } from './pages/italianExercise';

function App() {

  return (
    <BrowserRouter>
      <NavigateApp/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/spanishexercise' element={<SpanishExercise/>}/>
        <Route path='/italianexercise' element={<ItalianExercise/>}/>
        <Route path='/programmingexercise' element={<ProgrammingExercise/>}/>
        <Route path='/mathexercise' element={<MathExercise/>}/>
        <Route path='/physicexercise' element={<PhysicExercise/>}/>
        <Route path='/contacto' element={<Contact/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
  )
}

export default App
