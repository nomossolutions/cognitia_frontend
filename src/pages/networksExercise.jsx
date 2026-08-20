import { HiCpuChip } from 'react-icons/hi2';
import { NetworksExerciseIA } from '../helpers/configIa';
import { ExercisePage } from '../components/ExercisePage';

export const NetworksExercise = () => (
  <ExercisePage
    title="Sistemas y Redes"
    icon={HiCpuChip}
    iaFunction={NetworksExerciseIA}
    description="La IA genera ejercicios sobre protocolos, arquitectura y sistemas operativos."
  />
);
