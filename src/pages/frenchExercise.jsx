import { FR } from 'country-flag-icons/react/3x2';
import { FrenchExerciseIA } from '../helpers/configIa';
import { ExercisePage } from '../components/ExercisePage';

export const FrenchExercise = () => (
  <ExercisePage
    title="Francés"
    icon={FR}
    iaFunction={FrenchExerciseIA}
    description="La IA adapta el contenido al estilo de francés seleccionado."
    extraFields={[
      { name: 'region', label: 'Región/Variante', type: 'select', options: ['Francés general', 'Francia', 'Canadá', 'Bélgica', 'Suiza', 'Marruecos', 'Túnez'] }
    ]}
  />
);
