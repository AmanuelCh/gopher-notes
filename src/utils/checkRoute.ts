import { useEffect } from 'react';
import { categories } from './lists';
import { useNavigate, useParams } from 'react-router-dom';

function checkRoute(exercises?: string[]) {
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // if user navigated to a topic page
    if (category) {
      // check if category exists defined by us
      const isCategoryExist = categories.some(
        (prevCategory) =>
          prevCategory.link.slice(1).toLowerCase() === category?.toLowerCase()
      );

      // navigate to error page if user entered invalid category (the check is necessary because they might enter a URL manually and be invalid)
      if (!isCategoryExist) {
        console.log('Category does not exist:', category);
        navigate('/error');
      }

      return;
    }

    // if single exercise page isn't one of the three type, navigate to error page
    if (
      !exercises?.some(
        (exercise) =>
          exercise === 'beginner' ||
          exercise === 'intermediate' ||
          exercise === 'advanced'
      )
    ) {
      navigate('/error');
    }
  }, [category, exercises, navigate]);
}

export default checkRoute;
