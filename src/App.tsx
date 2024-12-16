import MainLayout from "@/layouts/MainLayout";
import Categories from "@/containers/Categories";
import Products from "@/containers/Products";
import Banners from "@/containers/Banners";
import { GlobalProvider } from "@/contexts/GlobalContext";


const App: React.FC = () => {
  return (
    <GlobalProvider>
      <MainLayout>
        <Categories></Categories>
        <Products></Products>
        <Banners></Banners>
      </MainLayout>
    </GlobalProvider>
  )
}

export default App;