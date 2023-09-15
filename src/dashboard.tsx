import React, { useEffect, useState } from 'react';

export const DashboardHeader: React.FC = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch(window.location.origin + '/admin/api/resources/Customer/actions/list')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  return (
    <div
      style={{
        backgroundColor: '#2fa15e',
        width: '100%',
        display: 'flex',
        height: '300px',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h2
        style={{
          fontSize: '50px',
          color: 'white',
          textTransform: 'uppercase',
          lineHeight: '55px',
          textAlign: 'center',
        }}
      >
        Bienvenido al panel administrativo de Gol Manager
      </h2>
      {loading ? (
        <></>
      ) : (
        <div
          style={{
            padding: '25px 40px',
            backgroundColor: '#a5b8d4',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '8px',
            border: '2px solid black',
            position: 'relative',
            top: '45px',
          }}
        >
          <p style={{ fontSize: '2em' }}>
            {data.meta.total} usuarios registrados
          </p>
        </div>
      )}
    </div>
  );
};

export const Dashboard: React.FC = () => {
  return <DashboardHeader />;
};

export default Dashboard;
