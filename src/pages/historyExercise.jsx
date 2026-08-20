import { HiClock } from 'react-icons/hi2';
import { HistoryExerciseIA } from '../helpers/configIa';
import { ExercisePage } from '../components/ExercisePage';

export const HistoryExercise = () => (
  <ExercisePage
    title="Historia"
    icon={HiClock}
    iaFunction={HistoryExerciseIA}
    description="La IA adapta el contenido al nivel histórico seleccionado."
  />
);
