import { GB } from 'country-flag-icons/react/3x2';
import { EnglishExerciseIA } from '../helpers/configIa';
import { ExercisePage } from '../components/ExercisePage';

export const EnglishExercise = () => (
  <ExercisePage
    title="Inglés"
    icon={GB}
    iaFunction={EnglishExerciseIA}
    description="La IA adapta el contenido al estilo de inglés seleccionado."
    extraFields={[
      { name: 'region', label: 'Región/Variante', type: 'select', options: ['Inglés general', 'Reino Unido', 'Estados Unidos', 'Australia', 'Canadá', 'Irlanda', 'Nueva Zelanda', 'Sudáfrica'] }
    ]}
  />
);
