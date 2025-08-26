import AppHeader from "./-components/AppHeader";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AppHeader />
      {children}
    </div>
  );
};
export default DashboardLayout;
