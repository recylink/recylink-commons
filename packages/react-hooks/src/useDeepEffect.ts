import { useEffect, useRef } from 'react';
import isEqual from 'lodash/isEqual';

const useDeepEffect = (
  fn: (...args: any[]) => unknown,
  params: Array<any>,
  cleanUp?: (...args: any[]) => unknown,
): void => {
  const isFirst = useRef(true);
  const prevParams = useRef(params);

  useEffect(() => {
    return () => {
      if (cleanUp) {
        cleanUp();
      }
    };
  }, []);

  useEffect(() => {
    const isSame = prevParams.current.every((obj, index) =>
      isEqual(obj, params[index]),
    );

    if (isFirst.current || !isSame) {
      fn();
    }

    isFirst.current = false;
    prevParams.current = params;
  }, [params, fn]);
};

export default useDeepEffect;
