import { HiBeaker } from 'react-icons/hi2';
import { ChemistryExerciseIA } from '../helpers/configIa';
import { ExercisePage } from '../components/ExercisePage';

export const ChemistryExercise = () => (
  <ExercisePage
    title="Química"
    icon={HiBeaker}
    iaFunction={ChemistryExerciseIA}
    description="La IA adapta el contenido al nivel de química seleccionado."
  />
);
