import React from 'react';
import { getTodos } from '../api';
import { useQuery } from '@tanstack/react-query';

const Todos = () => {
  // Queries
  const query = useQuery({ queryKey: ['todos'], queryFn: getTodos });
  const { data, isError, isFetching, isSuccess } = query;
  return (
    <div>
      <h1>Todos</h1>

      <div>{isFetching && 'Background Updating...'}</div>
      <div>{isError && 'Error'}</div>
      <div>{isSuccess && data?.map(todo => <li key={todo.id}>{todo.title}</li>)}</div>
    </div>
  );
};

export default Todos;
