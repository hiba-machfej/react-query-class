import React from 'react';
import { postTodo } from '../api';
import { useQueryClient, useMutation } from '@tanstack/react-query';

const AddTodo = () => {
  // Access the client
  const queryClient = useQueryClient();

  // Mutations
  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    }
  });

  const { isLoading, isError, isSuccess, mutate, error } = mutation;

  return (
    <div>
      <h1>AddTodo</h1>

      {isLoading ? (
        'Loading...'
      ) : (
        <>
        {isError && error.message }

        {isSuccess && <div>Todo added!</div>}

          <button
            onClick={() => {
              mutate({
                title: 'Do Laundry'
              });
            }}
          >
            Add Todo
          </button>
        </>
      )}
    </div>
  );
};

export default AddTodo;
