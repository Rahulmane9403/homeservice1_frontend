import React, { useEffect, useState } from 'react';
import { getSystemAdministrations, createSystemAdministration } from './components/services/systemAdministrationService';

const SystemAdministrationPage = () => {
  const [admins, setAdmins] = useState([]);
  const [newAdmin, setNewAdmin] = useState({ name: '', role: '' });

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const adminData = await getSystemAdministrations();
        setAdmins(adminData);
      } catch (error) {
        console.error('Error fetching system administrators:', error);
      }
    };

    fetchAdmins();
  }, []);

  const handleAdminCreate = async () => {
    try {
      const createdAdmin = await createSystemAdministration(newAdmin);
      setAdmins([...admins, createdAdmin]);
      setNewAdmin({ name: '', role: '' });
    } catch (error) {
      console.error('Error creating system administrator:', error);
    }
  };

  return (
    <div>
      <h1>System Administrators</h1>

      {/* Create Admin Form */}
      <div>
        <input 
          type="text" 
          placeholder="Name" 
          value={newAdmin.name} 
          onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })} 
        />
        <input 
          type="text" 
          placeholder="Role" 
          value={newAdmin.role} 
          onChange={(e) => setNewAdmin({ ...newAdmin, role: e.target.value })} 
        />
        <button onClick={handleAdminCreate}>Create Admin</button>
      </div>

      {/* Admin List */}
      <ul>
        {admins.map(admin => (
          <li key={admin.id}>
            {admin.name} - {admin.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SystemAdministrationPage;
