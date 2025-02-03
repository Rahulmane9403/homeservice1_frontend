import React, { useEffect, useState } from 'react';
import { getSupports, createSupport } from './SupportService';

const SupportPage = () => {
  const [supports, setSupports] = useState([]);
  const [newSupport, setNewSupport] = useState({ issue: '', description: '' });

  useEffect(() => {
    const fetchSupports = async () => {
      try {
        const supportData = await getSupports();
        setSupports(supportData);
      } catch (error) {
        console.error('Error fetching supports:', error);
      }
    };

    fetchSupports();
  }, []);

  const handleSupportCreate = async () => {
    try {
      const createdSupport = await createSupport(newSupport);
      setSupports([...supports, createdSupport]);
      setNewSupport({ issue: '', description: '' });
    } catch (error) {
      console.error('Error creating support:', error);
    }
  };

  return (
    <div>
      <h1>Support</h1>

      {/* Create Support Form */}
      <div>
        <input 
          type="text" 
          placeholder="Issue" 
          value={newSupport.issue} 
          onChange={(e) => setNewSupport({ ...newSupport, issue: e.target.value })} 
        />
        <input 
          type="text" 
          placeholder="Description" 
          value={newSupport.description} 
          onChange={(e) => setNewSupport({ ...newSupport, description: e.target.value })} 
        />
        <button onClick={handleSupportCreate}>Create Support</button>
      </div>

      {/* Supports List */}
      <ul>
        {supports.map(support => (
          <li key={support.id}>
            {support.issue} - {support.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupportPage;
