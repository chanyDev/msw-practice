import { useQuery } from '@apollo/client';
import { GET_ANIMATION } from '../graphql/query/animation';

interface Animation {
  Media: {
    id: number;
    title: {
      english: string;
    };
  };
}

const Graphql = () => {
  // graphql
  const { data, loading } = useQuery<Animation>(GET_ANIMATION, {
    variables: {
      mediaId: 21,
    },
  });

  if (loading) return null;

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>{data?.Media.title.english}</h2>{' '}
    </div>
  );
};

export default Graphql;
