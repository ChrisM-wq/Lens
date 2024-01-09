import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
  // ['bold', 'italic', 'underline', 'strike'],
  [{ 'header': [1, 2, false] }],
  ['blockquote', 'code-block'],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  
]};

export default function TextEditor({value, setValue}) {
  return <ReactQuill 
  theme="snow" 
  value={value} 
  onChange={setValue}
  modules={modules} 
  style={{ width: '100%'}}
  />;
}