import React from 'react';
import { Filter } from '../../App';
interface Props {
  filter: Filter;
  setFilter: (filter: Filter) => void;
  activeCount: number;
  completedCount: number;
  isLoading: boolean;
  clearCompleted: () => void;
}

export const Footer: React.FC<Props> = ({
  filter,
  setFilter,
  activeCount,
  completedCount,
  isLoading,
}) => (
  <footer className="todoapp__footer" data-cy="Footer">
    <span className="todo-count" data-cy="TodosCounter">
      {activeCount} items left
    </span>

    <nav className="filter" data-cy="Filter">
      <a
        href="#/"
        className={`filter__link ${filter === 'All' ? 'selected' : ''}`}
        data-cy="FilterLinkAll"
        onClick={() => setFilter(Filter.All)}
      >
        All
      </a>

      <a
        href="#/active"
        className={`filter__link ${filter === 'Active' ? 'selected' : ''}`}
        data-cy="FilterLinkActive"
        onClick={() => setFilter(Filter.Active)}
      >
        Active
      </a>

      <a
        href="#/completed"
        className={`filter__link ${filter === 'Completed' ? 'selected' : ''}`}
        data-cy="FilterLinkCompleted"
        onClick={() => setFilter(Filter.Completed)}
      >
        Completed
      </a>
    </nav>

    <button
      type="button"
      className="todoapp__clear-completed"
      data-cy="ClearCompletedButton"
      disabled={isLoading || completedCount === 0}
    >
      Clear completed
    </button>
  </footer>
);
