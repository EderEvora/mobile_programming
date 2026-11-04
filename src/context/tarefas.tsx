import { createContext, ReactNode, useContext, useState } from 'react';

export type Tarefa = {
  id: string;
  title: string;
  subject: string;
  description: string;
  dueDate: string;
  completed: boolean;
};

const inicial: Tarefa[] = [
  {
    id: '1',
    title: 'Trabalho de React Native',
    subject: 'Programação Mobile',
    description: 'Desenvolver uma aplicação utilizando Expo.',
    dueDate: '15/11/2026',
    completed: false,
  },
  {
    id: '2',
    title: 'Relatório de Engenharia de Software',
    subject: 'Engenharia de Software',
    description: 'Elaborar um relatório sobre metodologias ágeis.',
    dueDate: '20/11/2026',
    completed: false,
  },
  {
    id: '3',
    title: 'Protótipo de Interface',
    subject: 'IHC',
    description: 'Criar um protótipo de uma aplicação mobile.',
    dueDate: '25/11/2026',
    completed: true,
  },
];

type Contexto = {
  tasks: Tarefa[];
  addTask: (t: Omit<Tarefa, 'id' | 'completed'>) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
};

const TarefasContext = createContext({} as Contexto);

export function TarefasProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Tarefa[]>(inicial);

  function addTask(t: Omit<Tarefa, 'id' | 'completed'>) {
    setTasks([...tasks, { ...t, id: Date.now().toString(), completed: false }]);
  }

  function toggleTask(id: string) {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  }

  function deleteTask(id: string) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  return (
    <TarefasContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TarefasContext.Provider>
  );
}

export function useTarefas() {
  return useContext(TarefasContext);
}