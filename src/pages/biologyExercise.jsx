import { HiSparkles } from 'react-icons/hi2';
import { BiologyExerciseIA } from '../helpers/configIa';
import { ExercisePage } from '../components/ExercisePage';

export const BiologyExercise = () => (
  <ExercisePage
    title="Biología"
    icon={HiSparkles}
    iaFunction={BiologyExerciseIA}
    description="La IA adapta el contenido al nivel de biología seleccionado."
  />
);
