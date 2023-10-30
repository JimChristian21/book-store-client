import React, {
  useState
} from 'react'

import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';

const EditBooks = () => {

  const { id } = useParams();
  const { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL } = useLoaderData();
  const bookCategories = [
    'Fiction',
    'Non-Fiction',
    'Mistery',
    'Programming',
    'Science Fiction',
    'Fantasy',
    'Horror',
    'Bibliography',
    'Autobiography',
    'History',
    'Self-help',
    'Memoir',
    'Business',
    'Children Books',
    'Travel',
    'Religion',
    'Art and Design'
];

const [selectedBookCategory, setSelectedBookCategory] = useState('');

const handleChangeSelectedCategory = (e) => {

    console.log(e.target.value);
    setSelectedBookCategory(e.target.value);
}

const handleUpdate = (e) => {

    e.preventDefault();

    const form = e.target;
    
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObject = {
        bookTitle,
        authorName, 
        imageURL, 
        category, 
        bookDescription,
        bookPDFURL
    }

    fetch(`https://book-store-server-rspc.onrender.com/books/${id}`,{
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookObject)
    })
      .then(res => res.json())
      .then(data => {
        alert('Book updated successfully');
      })
      .catch(err => {
        console.log(err)
      });
}

return (
    <div className='px-4 my-12'>
        <h2 className='mb-8 text-3xl font-bold'>Update book data</h2>

        <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
            <div className='flex gap-8'>
                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="bookTitle"
                            value="Book Title"
                        />
                    </div>
                    <TextInput
                        id="bookTitle"
                        name='bookTitle'
                        placeholder="Book name"
                        required
                        type="text"
                        defaultValue={bookTitle}
                    />
                </div>
                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="authorName"
                            value="Author Name"
                        />
                    </div>
                    <TextInput
                        id="authorName"
                        name='authorName'
                        placeholder="Author name"
                        required
                        type="text"
                        defaultValue={authorName}
                    />
                </div>
            </div>
            <div className='flex gap-8'>
                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="imageURL"
                            value="Book Image URL"
                        />
                    </div>
                    <TextInput
                        id="imageURL"
                        name='imageURL'
                        placeholder="Book image URL"
                        required
                        type="text"
                        defaultValue={imageURL}
                    />
                </div>
                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="inputState"
                            value="Book Category"
                        />
                    </div>
                    <Select 
                        id='inputState'
                        name='categoryName'
                        className='w-full rounded'
                        value={selectedBookCategory}
                        onChange={handleChangeSelectedCategory}
                        defaultValue={category}
                    >
                        {
                            bookCategories.map((category) => <option key={category} value={category}>{category}</option>)
                        }
                    </Select>
                </div>
                
            </div>

            <div>
                <div className="mb-2 block">
                <Label
                    htmlFor="bookDescription"
                    value="Book Description"
                />
                </div>
                <Textarea
                    id="bookDescription"
                    name='bookDescription'
                    placeholder="Write your book description..."
                    required
                    rows={6}
                    className='w-full'
                    defaultValue={bookDescription}
                />
            </div>

            <div>
            <div className="mb-2 block">
                <Label
                    htmlFor="bookPDFURL"
                    value="Book PDF URL"
                />
                </div>
                <TextInput
                    id="bookPDFURL"
                    name='bookPDFURL'
                    placeholder="book pdf url"
                    required
                    type="url"
                    defaultValue={bookPDFURL}
                />
            </div>
            
            <Button type="submit">
                Update Book
            </Button>
        </form>
    </div>
)
}

export default EditBooks