export const AuthHomePage = ({ setIsLogin }: any) => {
  return (
    <>
      <button onClick={() => setIsLogin(false)}>Logout</button>
    </>
  );
};
