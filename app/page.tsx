import Banner from './components/Banner/index';
import Companies from './components/Companies/index';
import Products from './components/Products/index';
import Features from './components/Features/index';
import Simple from './components/Simple/index';
import Faq from './components/Faq/index';


export default function Home() {
  return (
    <main>
      <Banner />
      <Features />
      <Companies />
      <Products />
      <Simple />
    </main>
  )
}
