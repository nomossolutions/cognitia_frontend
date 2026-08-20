import { HiCalculator } from 'react-icons/hi2';
import { MathExerciseIA } from '../helpers/configIa';
import { ExercisePage } from '../components/ExercisePage';

export const MathExercise = () => (
  <ExercisePage
    title="Matemáticas"
    icon={HiCalculator}
    iaFunction={MathExerciseIA}
    description="La IA adapta el contenido al nivel matemático seleccionado."
  />
);
