import React, { useEffect, useState } from "react";
import { getWorkers, deleteWorker } from "../../services/workerService";

const WorkerList = () => {
    const [workers, setWorkers] = useState([]);

    useEffect(() => {
        loadWorkers();
    }, []);

    const loadWorkers = async () => {
        try {
            const response = await getWorkers();
            setWorkers(response.data);
        } catch (error) {
            console.error("Error fetching workers:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteWorker(id);
            loadWorkers(); // Refresh list after deletion
        } catch (error) {
            console.error("Error deleting worker:", error);
        }
    };

    return (
        <div>
            <h2>Worker List</h2>
            <ul>
                {workers.map(worker => (
                    <li key={worker.id}>
                        {worker.name} - {worker.specialization}
                        <button onClick={() => handleDelete(worker.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WorkerList;
