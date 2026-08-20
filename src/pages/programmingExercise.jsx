import { HiCodeBracket } from 'react-icons/hi2';
import { ProgrammingExerciseIA } from '../helpers/configIa';
import { ExercisePage } from '../components/ExercisePage';

export const ProgrammingExercise = () => (
  <ExercisePage
    title="Programación"
    icon={HiCodeBracket}
    iaFunction={ProgrammingExerciseIA}
    description="La IA genera ejercicios adaptados al lenguaje seleccionado."
    extraFields={[
      { name: 'lenguaje', label: 'Lenguaje', placeholder: 'Ej. Python, JavaScript, C++...' }
    ]}
  />
);
