import { HiLightBulb } from 'react-icons/hi2';
import { PhilosophyExerciseIA } from '../helpers/configIa';
import { ExercisePage } from '../components/ExercisePage';

export const PhilosophyExercise = () => (
  <ExercisePage
    title="Filosofía"
    icon={HiLightBulb}
    iaFunction={PhilosophyExerciseIA}
    description="La IA adapta el contenido al nivel filosófico seleccionado."
  />
);
