import { HiBolt } from 'react-icons/hi2';
import { PhysicExerciseIA } from '../helpers/configIa';
import { ExercisePage } from '../components/ExercisePage';

export const PhysicExercise = () => (
  <ExercisePage
    title="Física"
    icon={HiBolt}
    iaFunction={PhysicExerciseIA}
    description="La IA adapta el contenido al nivel de física seleccionado."
  />
);
