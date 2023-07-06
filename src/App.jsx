import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListSection from "./components/ListSection";
import Loading from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Contoh penggunaan setTimeout untuk simulasi loading data
    setTimeout(() => {
      setIsLoading(false); // Mengubah isLoading menjadi false setelah loading selesai
    }, 3000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <ListSection />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
