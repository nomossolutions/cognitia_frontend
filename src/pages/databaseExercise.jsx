import { HiServer } from 'react-icons/hi2';
import { DatabaseExerciseIA } from '../helpers/configIa';
import { ExercisePage } from '../components/ExercisePage';

export const DatabaseExercise = () => (
  <ExercisePage
    title="Bases de Datos"
    icon={HiServer}
    iaFunction={DatabaseExerciseIA}
    description="La IA genera ejercicios sobre consultas SQL, modelado y optimización."
  />
);
