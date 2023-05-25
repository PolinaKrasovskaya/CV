import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';

const createChunk = componentName => {
  return lazy(() =>
    import(`../pages/${componentName}/${componentName}`).then(module => ({
      default: module[componentName],
    }))
  );
};

const HomePage = createChunk('HomePage');
const ProjectsPage = createChunk('ProjectsPage');
const EducationPage = createChunk('EducationPage');
// const SkillsPage = createChunk('SkillsPage');
// const ContactsPage = createChunk('ContactsPage');
// const LanguagesPage = createChunk('LanguagesPage');

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="experience" element={<ProjectsPage />} />
        <Route path="education" element={<EducationPage />} />
        {/* <Route path="skills" element={<SkillsPage />} /> */}
        {/* <Route path="contacts" element={<ContactsPage />} />
        <Route path="languages" element={<LanguagesPage />} /> */}

        {/* <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route> */}
      </Route>
    </Routes>
  );
};
