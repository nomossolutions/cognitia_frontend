import { IT } from 'country-flag-icons/react/3x2';
import { ItalianExerciseIA } from '../helpers/configIa';
import { ExercisePage } from '../components/ExercisePage';

export const ItalianExercise = () => (
  <ExercisePage
    title="Italiano"
    icon={IT}
    iaFunction={ItalianExerciseIA}
    description="La IA adapta el contenido al nivel y estilo de italiano seleccionado."
    extraFields={[
      { name: 'region', label: 'Variante', type: 'select', options: ['Italiano estándar', 'Toscano', 'Napolitano', 'Siciliano', 'Lombardo', 'Italiano para extranjeros'] }
    ]}
  />
);
