import { useEffect } from 'react';
import { categories } from './lists';
import { useNavigate, useParams } from 'react-router-dom';

function checkRoute() {
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (category) {
      const isCategoryExist = categories.some(
        (prevCategory) =>
          prevCategory.link.slice(1).toLowerCase() === category?.toLowerCase()
      );

      if (!isCategoryExist) {
        console.log('Category does not exist:', category);
        navigate('/error');
      }

      return;
    }
  }, [category, navigate]);
}

export default checkRoute;
