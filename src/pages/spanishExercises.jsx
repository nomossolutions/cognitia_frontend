import { HiLanguage } from 'react-icons/hi2';
import { SpanishExerciseIA } from '../helpers/configIa';
import { ExercisePage } from '../components/ExercisePage';

export const SpanishExercise = () => (
  <ExercisePage
    title="Español"
    icon={HiLanguage}
    iaFunction={SpanishExerciseIA}
    description="La IA adapta el contenido al estilo de español seleccionado."
    extraFields={[
      { name: 'region', label: 'Región/País', type: 'select', options: ['Español general', 'España', 'México', 'Argentina', 'Colombia', 'Chile', 'Perú', 'Venezuela', 'Uruguay', 'Ecuador'] }
    ]}
  />
);
