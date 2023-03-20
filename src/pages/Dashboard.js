const Dashboard = ({user}) => {
  return (
    <section className='section'>
        <h1>Bonjour {user?.name}</h1>
    </section>
  );
};
export default Dashboard;
