import React from 'react';
import Table from '../../components/Tables/postTable'; // The Table component
import useApi from '../../hooks/useApi'; // The useApi hook

const DashboardPage: React.FC = () => {
  const { data, loading, error } = useApi(); // Fetching data using useApi hook

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <h1>Dashboard Page</h1>
      <Table data={data} />
    </div>
  );
};

export default DashboardPage;