import { HiGlobeAlt } from 'react-icons/hi2';
import { GeographyExerciseIA } from '../helpers/configIa';
import { ExercisePage } from '../components/ExercisePage';

export const GeographyExercise = () => (
  <ExercisePage
    title="Geografía"
    icon={HiGlobeAlt}
    iaFunction={GeographyExerciseIA}
    description="La IA adapta el contenido al nivel geográfico seleccionado."
  />
);
