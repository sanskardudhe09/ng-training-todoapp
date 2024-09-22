import axios from 'axios';

export const fetchTasks = async (page, limit) => {
    const response = await axios.get(`/api/todos/getall-todobypage?page=${page}&limit=${limit}`);
    return response;
};

export const addTask = async (task) => {
    await axios.post(`/api/todos/create-todo`, task, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    //return response.json();
};

export const editTask = async (id, task) => {
    await axios.put(`/api/todos/updatetodo-byid/${id}`, task, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    //return response.json();
};

export const deleteTask = async (id) => {
    const response = await fetch(`/api/todos/delete-todo/${id}`, {
        method: 'DELETE',
    });
    return response.json();
};
