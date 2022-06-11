import { useState, useContext } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Button from "../components/Button";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import useBooks from "../hooks/useBooks";
import { AppContext } from "../context/AppContext";
import Error from "../components/Error";
import useCreateBook from "../hooks/useCreateBook";

// let books=[{id:1,name:"Kids book1"},{id:2,name:"kids book2"},{id:3, name:"kids book 3"}]

//Defining our yup validation
const FormSchema = Yup.object({
  title: Yup.string().required(),
  author: Yup.string().required(),
  pages: Yup.number().integer().required(),
  summary: Yup.string().required(),
  subject: Yup.string().required(),
  img: Yup.string().required(),
});
export default function BookForm({ book }) {
  const { setUser } = useContext(AppContext);

  const { books, error } = useBooks();
  const [newBook, setNewBook] = useState({});
  useCreateBook(newBook);

  const initialValues = {
    title: book?.title ?? "",
    author: book?.author ?? "",
    pages: book?.pages ?? 0,
    summary: book?.summary ?? "",
    subject: book?.subject ?? "",
    img: book?.img ?? "",
  };
  const handleSubmit = (values, resetForm) => {
    if (book) {
      setNewBook(values);
    }
    console.log(values);
    resetForm(initialValues);
  };
  // const handleDelete=()=>{
  //     setDeleteItem(book)
  // }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: FormSchema,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values, resetForm);
    },
    enableReinitialize: true,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id="title"
        name="title"
        fullWidth
        sx={{ mb: 2, mt: 2 }}
        label="title"
        placeholder="title"
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
      />
      <TextField
        id="author"
        name="author"
        fullWidth
        sx={{ mb: 2 }}
        label="author"
        placeholder="author"
        value={formik.values.author}
        onChange={formik.handleChange}
        error={formik.touched.author && Boolean(formik.errors.author)}
        helperText={formik.touched.author && formik.errors.author}
      />
      <TextField
        id="pages"
        name="pages"
        fullWidth
        sx={{ mb: 2 }}
        label="pages"
        placeholder="pages"
        value={formik.values.pages}
        onChange={formik.handleChange}
        error={formik.touched.pages && Boolean(formik.errors.pages)}
        helperText={formik.touched.pages && formik.errors.pages}
      />
      <TextField
        id="img"
        name="img"
        fullWidth
        sx={{ mb: 2 }}
        label="Image URL"
        placeholder="img"
        value={formik.values.img}
        onChange={formik.handleChange}
        error={formik.touched.img && Boolean(formik.errors.img)}
        helperText={formik.touched.img && formik.errors.img}
      />
      <TextField
        id="summary"
        name="summary"
        fullWidth
        sx={{ mb: 2 }}
        label="summary"
        placeholder="summary"
        value={formik.values.summary}
        onChange={formik.handleChange}
        error={formik.touched.summary && Boolean(formik.errors.summary)}
        helperText={formik.touched.summary && formik.errors.summary}
      />
      <FormControl fullWidth>
        <InputLabel id="book-label-id">Books</InputLabel>
        <Select
          labelId="book-label-id"
          id="book-id"
          value={formik.values.book_id}
          name="book_id"
          placeholder="Book"
          label="Book"
          onChange={formik.handleChange}
          error={formik.touched.book_id && Boolean(formik.errors.book_id)}
        >
          <MenuItem value={0}>
            <em>None</em>
          </MenuItem>

          {books.map((book) => (
            <MenuItem key={book.id} value={book.id}>
              {book.title} | {book.id}
            </MenuItem>
          ))}
        </Select>
        {error}
        <FormHelperText>
          {formik.touched.book_id && formik.errors.book_id}
        </FormHelperText>
      </FormControl>
      <Button type="submit" sx={{ width: "100%" }}>
        {book ? "Edit Book" : "Create Book"}
      </Button>
    </form>
  );
}
