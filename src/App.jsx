import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import "./App.css";
import notes from "./notes";

function App() {
  return (
    <>
      <Header />
      {notes.map((note) => {
        return (
          <Note key={note.key} title={note.title} content={note.content} />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
