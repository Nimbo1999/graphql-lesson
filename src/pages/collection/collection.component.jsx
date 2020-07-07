import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Spinner from '../../components/spinner/spinner.component';
import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const GET_COLLECTION = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id,
      title,
      items {
        id,
        name,
        price,
        imageUrl
      }
    }
  }
`;

const CollectionPage = ({ match }) => {
  
  const { params: { collectionId } } = match;

  const { loading, data, error } = useQuery(GET_COLLECTION, {
    variables: {
      title: collectionId
    }
  });

    console.log({loading});
    console.log({data});
    console.log({error});

  if(loading) return <Spinner />
  const { getCollectionsByTitle: { items, title } } = data;

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
