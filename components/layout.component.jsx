import Footer from "./footer/footer.component";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
