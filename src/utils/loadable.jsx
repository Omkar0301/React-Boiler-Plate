/* eslint-disable react/display-name */
import React, { lazy, Suspense } from 'react';
import Loading from '@components/common/Loading';

const loadable = (importFunc) => {
  const LazyComponent = lazy(importFunc);

  return (props) => {
    return (
      <Suspense fallback={<Loading />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
};

export default loadable;
