import { Footer } from "./components/ui/footer";
import { Header } from "./components/ui/header";
import { Sidebar } from "./components/ui/sidebar";
import { UserList } from "./components/user-list";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content-wrapper">
        <UserList />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
