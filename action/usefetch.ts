import axios from 'axios';

const BASE_URL = `${process.env.NEXT_PUBLIC_URL}/v1`;

const instance = axios.create({
    baseURL: BASE_URL,
});

export const ApiService = {
    setAuthToken: (telegramInitData: string) => {
        instance.defaults.headers.common['Authorization'] = `tma ${telegramInitData}`;
    },

    getUser: async () => {
        const response = await instance.post('/user/me');
        return response.data;
    },

    getTasks: async (telegramInitData?: string) => {
        let config = {};
        if (telegramInitData) {
            config = {
                headers: { Authorization: `tma ${telegramInitData}` }
            };
        }
        const response = await instance.get('/tasks', config);
        return response.data;
    },

    submitTask: async (taskId: string, initData: string) => {
        const response = await instance.post(`/user/${taskId}/submit`, null, {
            headers: {
                Authorization: `tma ${initData}`
            }
        } );
        return response;
    },

    getPayouts: async () => {
        const response = await instance.get('/payouts');
        return response.data;
    },
};

// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import { ApiService } from './api-service';

// export const useUser = () => {
//     return useQuery(['user'], ApiService.getUser);
// };

// export const useTasks = () => {
//     return useQuery(['tasks'], ApiService.getTasks);
// };

// export const useSubmitTask = () => {
//     const queryClient = useQueryClient();

//     return useMutation(
//         ({ taskId, proof }: { taskId: string; proof: string }) =>
//             ApiService.submitTask(taskId, proof),
//         {
//             onSuccess: () => {
//                 queryClient.invalidateQueries(['tasks']);
//                 queryClient.invalidateQueries(['user']);
//             },
//         }
//     );
// };

// export const usePayouts = () => {
//     return useQuery(['payouts'], ApiService.getPayouts);
// };

// export const useSetAuthToken = () => {
//     return (telegramInitData: string) => {
//         ApiService.setAuthToken(telegramInitData);
//     };
// };

// import { useSetAuthToken } from './hooks';

// const App = () => {
//     const setAuthToken = useSetAuthToken();

//     useEffect(() => {
//         const telegramInitData = // Get this from Telegram Mini App
//             setAuthToken(telegramInitData);
//     }, []);

//     // ... rest of your app
// };
// import { useUser, useTasks, useSubmitTask } from './hooks';

// const UserProfile = () => {
//     const { data: user, isLoading, error } = useUser();

//     if (isLoading) return <div>Loading...</div>;
//     if (error) return <div>Error: { error.message } </div>;

//     return (
//         <div>
//         <h1>{ user.first_name } { user.last_name } </h1>
//             < p > Points: { user.points } </p>
//                 </div>
//   );
// };

// const TaskList = () => {
//     const { data: tasks, isLoading, error } = useTasks();
//     const submitTaskMutation = useSubmitTask();

//     if (isLoading) return <div>Loading...</div>;
//     if (error) return <div>Error: { error.message } </div>;

//     const handleSubmit = (taskId: string, proof: string) => {
//         submitTaskMutation.mutate({ taskId, proof });
//     };

//     return (
//         <div>
//         {
//             tasks.map(task => (
//                 <div key= { task.id } >
//                 <h2>{ task.task_name } </h2>
//                 < p > Amount: { task.amount } </p>
//             < button onClick = {() => handleSubmit(task.id, 'proof')}> Submit </button>
//                 </div>
//       ))}
// </div>
//   );
// };