import ShoppingList from './components/ShoppingList';
import ProductList from './components/ProductList';
import MenuCategories from './components/MenuCategories';
import BookList from './components/BookList';
import AnimalFilter from './components/AnimalFilter';
import StudentGroups from './components/StudentGroups';
import MessageList from './components/MessageList';
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <h1>Comprehensive React Mapping Techniques Project</h1>

      <section className="exercise-section">
        <h2>Exercise 1: Shopping List - Conditional Styling</h2>
        <ShoppingList />
      </section>

      <section className="exercise-section">
        <h2>Exercise 2: Product List - Highlight Expensive Products</h2>
        <ProductList />
      </section>

      <section className="exercise-section">
        <h2>Exercise 3: Menu Categories - Nested Lists</h2>
        <MenuCategories />
      </section>

      <section className="exercise-section">
        <h2>Exercise 4: Book List - Numbered List</h2>
        <BookList />
      </section>

      <section className="exercise-section">
        <h2>Exercise 5: Animal Filter - Filter and Render</h2>
        <AnimalFilter />
      </section>

      <section className="exercise-section">
        <h2>Exercise 6: Student Groups - Group by Grade (Using reduce)</h2>
        <StudentGroups />
      </section>

      <section className="exercise-section">
        <h2>Exercise 7: Message List - Conditional Rendering</h2>
        <MessageList />
      </section>
    </div>
  );
}

export default App;