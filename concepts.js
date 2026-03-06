// dependency array

//autosave in text editor every 5 seconds


const saveDocument = (content) => {
    console.log("Document saved:", content);
}
const [content, setContent] = useState("");

useEffect(() => {
  const timer = setInterval(() => {
    saveDocument(content);
  }, 5000);

  return () => clearInterval(timer);
}, [content]);