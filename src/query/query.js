export const CreateNote = title => `
mutation {
  createNote(title:"${title}"){
    title
    id
  }
}
`;

export const UpdateNote = (id, content) => `
mutation {
  updateNote(id:"${id}",content:"${content}"){
    content
  }
}
`;

export const getNoteList = () => `
query {
  notes{
    title
    id
  }
}
`;

export const getNoteContent = id => `
query {
	note(id:"${id}"){
    title, 
    id,
    content,
  }
}
`;
