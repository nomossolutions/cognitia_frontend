import { PT } from 'country-flag-icons/react/3x2';
import { PortugueseExerciseIA } from '../helpers/configIa';
import { ExercisePage } from '../components/ExercisePage';

export const PortugueseExercise = () => (
  <ExercisePage
    title="Portugués"
    icon={PT}
    iaFunction={PortugueseExerciseIA}
    description="La IA adapta el contenido al estilo de portugués seleccionado."
    extraFields={[
      { name: 'region', label: 'Región/Variante', type: 'select', options: ['Portugués general', 'Brasil', 'Portugal', 'Angola', 'Mozambique', 'Cabo Verde'] }
    ]}
  />
);
